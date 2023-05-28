import { Head, asset } from "$fresh/runtime.ts";
import Layout from "$/components/Layout.tsx";
import BreadCrumbs from "$/components/BreadCrumbs.tsx";

export default function ShopPage() {
  return (
    <Layout>
      <Head>
        <title>Shop | En-Di</title>
      </Head>
      <BreadCrumbs path={[{ title: "Shop" }]} />

      <h1>En-Di Shop is Opening soon!</h1>
      <p>
        Shop is currently under development and we're working as fast as we can.
      </p>
      <img
        src={asset(
          "/shop/embroidered-simple-backpack-i-bagbase-bg126-anthracite-front.png"
        )}
        alt="Embrodered En-Di backpack"
      />
    </Layout>
  );
}
