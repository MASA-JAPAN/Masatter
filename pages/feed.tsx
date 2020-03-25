import { makeStyles, createStyles } from "@material-ui/core/styles";
import AppBar from "../components/AppBar";
import PostDialog from "../components/PostDialog";
import Post from "../components/Post";
import { getPostsByFollowing } from "../utils/firebaseUtil";

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
      <AppBar />
      {props.posts.map((post: any) => (
        <Post key={post.id} content={post.content} />
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
