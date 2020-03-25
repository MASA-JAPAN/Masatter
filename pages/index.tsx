import Link from "next/link";
import Layout from "../components/Layout";
import Post from "../components/Post";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/signin">
        <a>signin</a>
      </Link>
      <Link href="/feed">
        <a>feed</a>
      </Link>
    </p>
    <Post />
  </Layout>
);

export default IndexPage;
