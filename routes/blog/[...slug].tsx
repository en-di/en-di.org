import { Head } from "$fresh/runtime.ts";
import { Handler, Handlers, PageProps } from "$fresh/server.ts";
import { lookup } from "https://deno.land/x/mime_types@1.0.0/mod.ts";
import { content, staticContent } from "$/content.gen.ts";
import Layout from "$/components/Layout.tsx";
import { Info } from "$/components/Info.tsx";
import BreadCrumbs from "$/components/BreadCrumbs.tsx";

interface Data {
  article: Article;
}

const renderArticle: Handler<Data> = async (_req, ctx) => {
  const slug = ctx.params.slug;
  const article = content[slug];
  if (article) {
    return ctx.render({ article });
  }
  const file = staticContent[slug];
  if (file) {
    const mime = lookup(slug);
    return new Response(await Deno.readFile(file), {
      headers: { "content-type": mime || "application/octet-stream" },
    });
  }
  return ctx.renderNotFound();
};

export const handler: Handlers<Data> = {
  GET: renderArticle,
  HEAD: renderArticle,
};

export default function ArticlePage({ data, params }: PageProps<Data>) {
  const { title, tags, date, content, summary, author } = data.article;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: new Date(date).toISOString(),
    author: [
      {
        "@type": "Person",
        name: author,
      },
    ],
    abstract: summary,
    keywords: tags,
  };

  return (
    <Layout>
      <Head>
        <title>{title} - En-Di</title>
        <meta name="description" content={summary} />
        <link rel="canonical" href={`https://en-di.org/blog/${params.slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <BreadCrumbs path={[{ url: "/blog", title: "Blog" }, { title }]} />
      <h1 style="margin-bottom: 0.5rem">{title}</h1>
      <Info tags={tags} date={new Date(date)} />
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  );
}
