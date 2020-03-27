import { makeStyles, createStyles } from "@material-ui/core/styles";
import Bar from "../components/Bar";
import PostDialog from "../components/PostDialog";
import Post from "../components/Post";
import { getPostsByFollowing } from "../utils/firebaseUtil";
import Router from "next/router";

const useStyles = makeStyles(() =>
  createStyles({
    postButton: {
      position: "absolute",
      right: "10px",
      bottom: "10px"
    }
  })
);

export default function Feed(props: any) {
  const classes = useStyles();
  console.log(props.posts);

  return (
    <div>
      <Bar />
      {props.posts.map((post: any) => (
        <div
          onClick={() =>
            Router.push({
              pathname: "/postPage",
              query: { id: post.id }
            })
          }
        >
          <Post key={post.id} content={post.content} />
        </div>
      ))}

      <div className={classes.postButton}>
        <PostDialog buttonName="Post" />
      </div>
    </div>
  );
}

Feed.getInitialProps = async () => {
  const posts = await getPostsByFollowing(["test", "sss"]);

  return { posts };
};
