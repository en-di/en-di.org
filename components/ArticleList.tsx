import { Info } from "./Info.tsx";
import { css } from "@emotion/css";

export function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <>
      {articles?.length > 0 ? (
        articles?.map((article) => (
          <article
            className={css`
              padding: 1rem 0;
              a:has(h2) {
                text-decoration: none;
              }
              & + & {
                border-top: 1px solid gainsboro;
              }
            `}
          >
            <a href={`/blog/${article.url}`}>
              {article.cover && (
                <img
                  src={article.cover.replace(/^\./, `/blog/${article.url}`)}
                  alt={article.title}
                />
              )}
              <h2>{article.title}</h2>
            </a>
            <Info
              tags={article.tags}
              date={new Date(article.date)}
              author={article.author}
            />
            <p>{article.summary}</p>
            <a href={`/blog/${article.url}`}>Read more</a>
          </article>
        ))
      ) : (
        <p
          className={css`
            padding: 2rem 0;
            text-align: center;
          `}
        >
          Articles coming soon! Stay tuned!{" "}
        </p>
      )}
    </>
  );
}
