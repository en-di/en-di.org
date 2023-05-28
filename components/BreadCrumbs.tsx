import { css } from "@emotion/css";
export default function BreadCrumbs({
  path,
}: {
  path: Array<{ url?: string; title: string }>;
}) {
  return (
    <ul
      className={css`
        font-size: 0.8;
        color: rgba(0, 0, 0, 0.75);
        &,
        li {
          display: inline-block;
        }
        list-style-type: none;
        margin: 0;
        padding: 0;
        li + li {
          &::before {
            content: "/";
            margin: 0 0.5rem;
            opacity: 0.5;
          }
        }
      `}
    >
      <li>
        <a href={"/"}>Home</a>
      </li>
      {path.map((entry) => (
        <li>
          {entry.url ? <a href={entry.url}>{entry.title}</a> : entry.title}
        </li>
      ))}
    </ul>
  );
}
