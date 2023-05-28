import { css } from "@emotion/css";
import { wrapper } from "../styles/utils.ts";
export default function Header() {
  return (
    <header
      className={css`
        display: flex;
        flex-direction: row;
        ${wrapper}
        padding-top: 1rem;
        padding-bottom: 1rem;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        `}
      >
        <svg
          width="43"
          height="36"
          viewBox="0 0 43 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.0969 0.380237C32.0215 -0.455126 35.1929 0.140689 37.6318 1.63202C40.082 3.13026 42.0645 5.72187 42.0645 9.03487C42.0645 12.3354 40.0597 15.0278 37.6064 16.5804C38.2256 16.1886 38.8162 15.7242 39.3532 15.1956L22.3978 36L3.45917 15.8428C3.46185 15.8449 3.46456 15.847 3.46729 15.8492C1.48331 14.2675 0 11.8798 0 9.03487C0 5.81092 1.92955 3.22511 4.28088 1.707C6.62323 0.194696 9.72515 -0.492787 12.5762 0.395343C16.2151 1.52891 18.6659 3.88322 20.8333 6.11774C23.0498 3.82934 25.6136 1.37518 29.0969 0.380237ZM7.84951 17.9048L22.3088 33.5962L34.9028 17.8058C34.0528 18.0562 33.1637 18.2014 32.264 18.2172C32.5995 18.2232 32.9339 18.2109 33.266 18.1815L22.2237 31.9784L9.49466 18.1083C9.54601 18.1082 9.5974 18.1077 9.6488 18.1068C9.04088 18.0962 8.43823 18.0265 7.84951 17.9048ZM11.5557 17.9401L22.1346 29.407L31.1859 18.1729C30.4154 18.0952 29.6456 17.9162 28.8944 17.621C25.4147 16.2535 22.9043 14.346 20.8488 12.4321C18.6895 14.4858 16.0875 16.5127 12.6134 17.6624C12.2632 17.7783 11.9101 17.8704 11.5557 17.9401ZM22.7412 8.01552C25.007 5.68211 27.0095 3.80421 29.8444 2.99446C31.9586 2.39058 34.3494 2.81231 36.212 3.95127C38.0733 5.0894 39.3441 6.89965 39.3441 9.03487C39.3441 11.173 38.0337 13.0918 36.151 14.2833C34.2684 15.4747 31.9013 15.8811 29.8899 15.0907C26.5233 13.7676 24.1811 11.8839 22.1464 9.91244L22.011 9.78128L20.3471 8.09408L20.1367 7.87586C17.8001 5.45237 15.5309 3.11945 12.0635 2.0393C9.78821 1.33053 7.21255 1.86423 5.21579 3.15341C3.21623 4.4444 1.72293 6.54409 1.72293 9.03487C1.72293 11.5194 3.18146 13.6496 5.16965 14.9586C7.15638 16.2667 9.7373 16.8003 12.0718 16.0277C15.248 14.9766 17.5766 13.1966 19.6497 11.2175L18.919 10.51C16.8985 12.4432 14.7546 14.0898 11.7583 15.0813C9.7623 15.7419 7.49654 15.2969 5.7184 14.1261C3.94056 12.9556 2.72042 11.1084 2.72042 9.03487C2.72042 6.96782 3.96194 5.14979 5.75705 3.99081C7.55337 2.83103 9.82437 2.38602 11.7667 2.99107C15.0071 4.0005 17.1118 6.17974 19.5014 8.65387L19.6727 8.83123L21.321 10.5022L21.4429 10.6204C23.5181 12.6328 25.9847 14.6272 29.5249 16.0184C31.8926 16.9489 34.5932 16.4492 36.6847 15.1256C38.7771 13.8014 40.3416 11.5988 40.3416 9.03487C40.3416 6.4683 38.8104 4.37137 36.7326 3.10088C34.6585 1.83265 31.9816 1.34719 29.5703 2.03591C26.4873 2.91652 24.3041 5.01032 22.0587 7.33336L22.7412 8.01552ZM23.9702 9.26767C25.7542 10.9165 27.7676 12.4063 30.5204 13.4881C31.9186 14.0376 33.71 13.79 35.2293 12.8285C36.7454 11.869 37.6212 10.4418 37.6212 9.03487C37.6212 7.64012 36.7954 6.32669 35.3129 5.42013C33.8161 4.5049 31.9198 4.19259 30.3179 4.65014C28.0092 5.30958 26.2119 6.96424 23.9702 9.26767ZM17.7123 9.28251C15.5428 7.05315 13.7984 5.42767 11.254 4.63503C9.88523 4.20865 8.14041 4.50204 6.69196 5.43721C5.25444 6.36532 4.44336 7.69542 4.44336 9.03487C4.44336 10.4023 5.25554 11.7593 6.66624 12.6881C8.08231 13.6205 9.80374 13.9143 11.2167 13.4467C13.8 12.5918 15.807 11.0843 17.7123 9.28251Z"
            fill="black"
          />
        </svg>

        <div
          className={css`
            display: flex;
            flex-direction: column;
            margin-left: 0.5rem;
            font-size: 0.8rem;
          `}
        >
          <div>
            <strong>EN-DI</strong>
          </div>
          <div
            className={css`
              opacity: 0.75;
            `}
          >
            Not broken, just Different
          </div>
        </div>
      </div>
    </header>
  );
}
