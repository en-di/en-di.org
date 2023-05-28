import { css } from "@emotion/css";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function Info({
  tags,
  date,
  author,
}: {
  tags: string[];
  date: Date;
  author: string;
}) {
  return (
    <section
      className={css`
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 2rem;
        @media screen and (min-width: 800px) {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
      `}
    >
      <span>
        {tags.map((tag, i) => (
          <>
            {i > 0 && ", "}
            <a class="tag" href={`/blog/tags/${tag}`}>
              {tag}
            </a>
          </>
        ))}
      </span>
      <span
        className={css`
          font-size: 0.8rem;
          opacity: 0.75;
          padding: 0.25rem 0;
        `}
      >
        {" "}
        {author && <span>{author}, </span>}
        <time dateTime={date.toISOString()}>
          {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
        </time>
      </span>
    </section>
  );
}
