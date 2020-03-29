import PostDialog from "../components/PostDialog";
import Post from "../components/Post";
import { getPostsByFollowing } from "../utils/firebaseUtil";
import Router from "next/router";

export default function Feed(props: any) {
  console.log(props.posts);

  return (
    <div>
      {props.posts.map((post: any) => (
        <div
          onClick={() =>
            Router.push({
              pathname: "/postPage",
              query: { id: post.id }
            })
          }
          key={post.id}
        >
          <Post content={post.content} />
        </div>
      ))}

      <div className="postButton">
        <PostDialog buttonName="Post" />
      </div>
      <style jsx>
        {`
          .postButton {
            position: fixed;
            right: 10px;
            bottom: 10px;
          }
        `}
      </style>
    </div>
  );
}

Feed.getInitialProps = async () => {
  const posts = await getPostsByFollowing(["test", "sss"]);

  return { posts };
};
