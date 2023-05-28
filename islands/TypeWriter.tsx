import { useEffect, useState } from "preact/hooks";
import { keyframes, css } from "@emotion/css";

const cursorColor = `rgba(0,0,0,0.75)`;

const cursorEffect = keyframes`
    from, to { border-color: transparent }
    50% { border-color: ${cursorColor}; }
`;

export default function TypeWriter({ texts }: { texts: string[] }) {
  const [{ textIdx, letterIdx }, setState] = useState<{
    textIdx: number;
    letterIdx: number;
  }>({ textIdx: 0, letterIdx: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => {
        // Create fake delay
        if (texts[state.textIdx].length + 10 > state.letterIdx) {
          return {
            textIdx: state.textIdx,
            letterIdx: state.letterIdx + 1,
          };
        }

        return {
          textIdx: texts.length > state.textIdx + 1 ? state.textIdx + 1 : 0,
          letterIdx: 0,
        };
      });
    }, 150);
    return () => {
      clearInterval(interval);
    };
  }, [...texts]);

  return (
    <span
      className={css`
        border-right: 0.05em solid ${cursorColor};
        animation: ${cursorEffect} 1s step-end infinite;
        letter-spacing: 0.05em;
      `}
    >
      {texts[textIdx].slice(0, letterIdx) || <span>&nbsp;</span>}
    </span>
  );
}
