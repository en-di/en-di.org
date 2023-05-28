import { Head } from "$fresh/runtime.ts";
import Layout from "$/components/Layout.tsx";
import BreadCrumbs from "$/components/BreadCrumbs.tsx";
import { css } from "@emotion/css";

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Us | En-Di</title>
      </Head>
      <BreadCrumbs path={[{ title: "About" }]} />
      <img
        src="/cover.jpg"
        alt="En-Di logo and slogan: Not Broken, Just Different"
      />
      <h1>About En-Di</h1>
      <p>
        In January 2023 I've learned that I am autistic. After 36 years of being
        an oddball it was truly a revelation: so many things about myself
        started to make sense. And most importantly, I finally found a way out
        of a deep dark mental health crysis.
      </p>
      <p>
        My therapist told me that I was lucky to be able to maintain a
        relatively normal life as for others autism can be quite deabilitating.
      </p>
      <p>
        And autism spectrum is not the only difference that separates
        neurodivergent people from neurotypical: there's so many flavors and
        combinations of being different!
      </p>
      <h2>Are we really that different?</h2>
      <p>
        Yes, we are! We differ significantly from each other, but there are many
        similarities too. Namely we all have some basic needs: to be safe and to
        belong.
      </p>
      <p>
        I was safe, but up until very recently I didn't really know where I
        belonged. I've always felt very different from my peers, almost like an
        alien from another planet. I knew very well how devastating this feeling
        can be and I've decided that I needed to do something with my new
        superpowers.
      </p>
      <h2>Building bridges between neurodiversity gaps</h2>
      <p>
        I was convinced that having a different brain is not a problem on it's
        own, but combined with rigidity of our society it might become one.
      </p>
      <p>
        I've developed many tools and techniques to thrive at my job and I
        thought that at very least I could share it with others. And so{" "}
        <a
          href="https://valeriavg.dev/not-broken-just-different"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          En-Di was born
        </a>
        .
      </p>
      <p>
        But En-Di is not only for IT folks and this website was created to be
        able to share our stories and vision with a wider audience.
      </p>
      <p>
        Please do not hesitate reaching out to us with questions, suggestions
        and feedback!
      </p>
      <p>
        Or better,{" "}
        <a
          href="https://github.com/orgs/en-di/discussions/3"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          join us
        </a>
        !
      </p>
      <p>
        <em>Best regards,</em>
        <span
          className={css`
            display: block;
            margin-left: 1rem;
            font-style: italic;
          `}
        >
          Valeria Viana Gusmao
        </span>
      </p>
    </Layout>
  );
}
