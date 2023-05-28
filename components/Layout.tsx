import { ComponentChildren } from "preact";
import { injectGlobal, css } from "@emotion/css";
import { Head } from "$fresh/runtime.ts";
import { wrapper } from "../styles/utils.ts";
import Header from "./Header.tsx";

injectGlobal`
html,body{
  margin:0;
  padding:0;
  font-family: 'Open Sans', sans-serif;
}
body{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-basis:1;
}
a {color: inherit;}
img {
  max-width: 100%;
}
`;

export default function Layout({
  children,
  isIndex,
}: {
  children: ComponentChildren;
  isIndex?: boolean;
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      {!isIndex && <Header />}
      <main
        className={css`
          ${wrapper}
          padding-bottom: 4rem;
        `}
      >
        {children}
      </main>
      <footer
        className={css`
          ${wrapper};
          margin-top: auto;
          padding-bottom: 1rem;
        `}
      >
        <div
          className={css`
            display: grid;
            padding-bottom: 1rem;
            grid-template-columns: repeat(3, auto);
            gap: 1rem;
            ul {
              margin: 0;
              padding: 0;
              list-style-type: none;
              li + li {
                margin-top: 0.5rem;
              }
            }
            header {
              font-weight: bold;
              text-transform: uppercase;
              margin-bottom: 1rem;
            }
          `}
        >
          <section>
            <header>En-Di</header>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
            </ul>
          </section>
          <section>
            <header>Our projects</header>
            <ul>
              <li>
                <a
                  href="https://github.com/orgs/en-di/projects/1"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Battery
                </a>{" "}
                <em>(Development)</em>
              </li>
              <li>
                <a
                  href="https://github.com/en-di/identity"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Identity
                </a>{" "}
                <em>(Planned)</em>
              </li>
              <li>
                <a
                  href="https://github.com/en-di/quotes"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Quotes
                </a>{" "}
                <em>(Planned)</em>
              </li>
            </ul>
          </section>
          <section>
            <header>Get in touch</header>
            <ul>
              <li>
                <a
                  href="https://github.com/en-di"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://join.slack.com/t/en-di/shared_invite/zt-1pgac6qqd-ZcBo_RA7TakoRsQ3LzCa~g"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Slack
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/MeNqK23bY9"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </li>
            </ul>
          </section>
        </div>
        <span
          className={css`
            font-size: 0.8rem;
          `}
        >
          EN-DI &copy;{new Date().getFullYear()} All rights reserved.
        </span>
      </footer>
    </>
  );
}
