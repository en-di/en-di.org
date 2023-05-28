import { Head } from "$fresh/runtime.ts";
import { UnknownPageProps } from "$fresh/server.ts";
import Layout from "$/components/Layout.tsx";
import BreadCrumbs from "../components/BreadCrumbs.tsx";

export default function PageNotFound(_: UnknownPageProps) {
  return (
    <Layout>
      <Head>
        <title>Page Not Found | En-Di</title>
      </Head>
      <BreadCrumbs path={[{ title: "Not Found" }]} />
      <h1>Page Not Found</h1>
      <p>This link is not so different, but definitely broken!</p>
    </Layout>
  );
}
