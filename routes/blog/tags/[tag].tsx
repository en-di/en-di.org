import { Head } from "$fresh/runtime.ts";
import { Handler, Handlers, PageProps } from "$fresh/server.ts";
import { ArticleList } from "$/components/ArticleList.tsx";
import BreadCrumbs from "$/components/BreadCrumbs.tsx";
import Layout from "$/components/Layout.tsx";
import { articlesByTag } from "$/content.gen.ts";

interface Data {
  articles: Article[];
  tag: string;
}

const renderTag: Handler<Data> = (_req, ctx) => {
  const tag = ctx.params.tag;
  if (tag in articlesByTag) {
    return ctx.render({ articles: articlesByTag[tag], tag });
  }
  return ctx.renderNotFound();
};

export const handler: Handlers<Data> = {
  GET: renderTag,
  HEAD: renderTag,
};

export default function TagPage({
  data: { articles, tag },
  params,
}: PageProps<Data>) {
  return (
    <Layout>
      <Head>
        <title>Posts about {tag} | En-Di</title>
        <meta name="description" content={`Blog posts about ${tag}`} />
        <link
          rel="canonical"
          href={`https://en-di.org/blog/tags/${params.tag}`}
        />
      </Head>
      <BreadCrumbs path={[{ url: "/blog", title: "Blog" }, { title: tag }]} />
      <ArticleList articles={articles} />
    </Layout>
  );
}
