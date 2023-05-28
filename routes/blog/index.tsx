import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { ArticleList } from "$/components/ArticleList.tsx";
import Layout from "$/components/Layout.tsx";
import { articlesByPubDate } from "$/content.gen.ts";
import BreadCrumbs from "$/components/BreadCrumbs.tsx";

interface Data {
  articles: Article[];
}

export const handler: Handlers<Data> = {
  HEAD(_req, ctx) {
    return ctx.render({ articles: articlesByPubDate });
  },
  GET(_req, ctx) {
    return ctx.render({ articles: articlesByPubDate });
  },
};

export default function HomePage({ data }: PageProps<Data>) {
  return (
    <Layout>
      <Head>
        <title>Blog | En-Di</title>
        <meta
          name="description"
          content="Personal and inspirational stories about neurodivergency, guides"
        />
      </Head>
      <BreadCrumbs path={[{ title: "Blog" }]} />
      <ArticleList articles={data.articles} />
    </Layout>
  );
}
