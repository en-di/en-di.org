import { Head } from "$fresh/runtime.ts";
import { injectGlobal, css } from "@emotion/css";
import TypeWriter from "../islands/TypeWriter.tsx";
import { wrapper } from "../styles/utils.ts";

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
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>En-Di</title>
        <meta
          name="description"
          content="Building digital bridges over neurodiversity gaps"
        />
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
      <main className={wrapper}>
        <section
          className={css`
            font-weight: bold;
            font-size: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <svg
            width="141"
            height="120"
            viewBox="0 0 141 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={css`
              margin: 2rem auto;
            `}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M96.9896 1.26746C106.738 -1.51709 117.31 0.468962 125.439 5.44007C133.607 10.4342 140.215 19.0729 140.215 30.1162C140.215 41.1181 133.532 50.0927 125.355 55.268C127.419 53.9619 129.387 52.4138 131.177 50.6522L74.6593 120L11.5306 52.8092C11.5395 52.8163 11.5485 52.8235 11.5576 52.8306C4.94436 47.5584 0 39.5994 0 30.1162C0 19.3697 6.43183 10.7504 14.2696 5.69C22.0774 0.648985 32.4172 -1.64262 41.9206 1.31781C54.0503 5.09636 62.2198 12.9441 69.4443 20.3925C76.8327 12.7645 85.3787 4.58392 96.9896 1.26746ZM26.165 59.6827L74.3628 111.987L116.343 59.3527C113.509 60.1873 110.546 60.6714 107.547 60.724C108.665 60.744 109.78 60.703 110.887 60.605L74.0791 106.595L31.6489 60.3609C31.82 60.3607 31.9913 60.3591 32.1627 60.356C30.1363 60.3206 28.1274 60.0883 26.165 59.6827ZM38.5189 59.8004L73.7821 98.0232L103.953 60.5764C101.385 60.3172 98.8188 59.7206 96.3146 58.7365C84.7157 54.1783 76.3478 47.8201 69.4959 41.4404C62.2984 48.286 53.6252 55.0424 42.0447 58.8747C40.8774 59.261 39.7002 59.5681 38.5189 59.8004ZM75.8041 26.7184C83.3567 18.9404 90.0318 12.6807 99.4814 9.98154C106.529 7.96859 114.498 9.37437 120.707 13.1709C126.911 16.9647 131.147 22.9988 131.147 30.1162C131.147 37.2433 126.779 43.6394 120.503 47.6111C114.228 51.5825 106.338 52.9371 99.633 50.3022C88.4109 45.892 80.6038 39.6131 73.8212 33.0415L73.37 32.6043L67.8237 26.9803L67.1223 26.2529C59.3337 18.1746 51.7697 10.3982 40.2116 6.79768C32.6274 4.4351 24.0418 6.2141 17.386 10.5114C10.7208 14.8147 5.74311 21.8136 5.74311 30.1162C5.74311 38.3981 10.6049 45.4986 17.2322 49.8621C23.8546 54.2224 32.4577 56.0011 40.2395 53.4258C50.8267 49.9221 58.5886 43.9888 65.4991 37.3918L63.0635 35.0334C56.3284 41.4774 49.1818 46.9659 39.1943 50.2711C32.541 52.473 24.9885 50.9896 19.0613 47.0871C13.1352 43.1853 9.06807 37.0281 9.06807 30.1162C9.06807 23.2261 13.2065 17.166 19.1902 13.3027C25.1779 9.43678 32.7479 7.95342 39.2222 9.97024C50.0236 13.335 57.0394 20.5991 65.0047 28.8462L65.5757 29.4374L71.0698 35.0072L71.4764 35.4014C78.3936 42.1092 86.6157 48.7573 98.4162 53.3948C106.309 56.4965 115.311 54.8308 122.282 50.4186C129.257 46.0046 134.472 38.6625 134.472 30.1162C134.472 21.561 129.368 14.5712 122.442 10.3363C115.528 6.10883 106.605 4.49062 98.5678 6.78638C88.2911 9.72174 81.0136 16.7011 73.5289 24.4445L75.8041 26.7184ZM79.9006 30.8922C85.8475 36.3883 92.5585 41.3543 101.735 44.9604C106.395 46.7921 112.367 45.9666 117.431 42.7617C122.485 39.5632 125.404 34.8058 125.404 30.1162C125.404 25.4671 122.651 21.089 117.71 18.0671C112.72 15.0163 106.399 13.9753 101.06 15.5005C93.364 17.6986 87.373 23.2141 79.9006 30.8922ZM59.0409 30.9417C51.8094 23.5105 45.9948 18.0922 37.5132 15.4501C32.9508 14.0288 27.1347 15.0068 22.3065 18.124C17.5148 21.2177 14.8112 25.6514 14.8112 30.1162C14.8112 34.6744 17.5185 39.1978 22.2208 42.2938C26.941 45.4017 32.6791 46.3809 37.3891 44.8222C46 41.9726 52.6901 36.9478 59.0409 30.9417Z"
              fill="black"
            />
          </svg>

          <h1
            className={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <span
              className={css`
                font-weight: normal;
                display: block;
                text-align: center;
                font-size: 0.5em;
              `}
            >
              En-Di means{" "}
            </span>
            <span
              className={css`
                font-size: 1.5em;
                display: block;
                text-align: center;
                white-space: pre;
              `}
            >
              <TypeWriter
                texts={[
                  "NeuroDiversity",
                  "Not broken,\njust Different",
                  "Not that Different",
                  "NeuroDivergent",
                  "Not Disabled",
                ]}
              />
            </span>
          </h1>
        </section>
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
                <a href="https://github.com/en-di">GitHub</a>
              </li>
              <li>
                <a href="https://join.slack.com/t/en-di/shared_invite/zt-1pgac6qqd-ZcBo_RA7TakoRsQ3LzCa~g">
                  Slack
                </a>
              </li>
              <li>
                <a href="https://discord.gg/MeNqK23bY9">Discord</a>
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