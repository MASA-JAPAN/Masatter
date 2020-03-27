// import { makeStyles, createStyles } from "@material-ui/core/styles";
import Bar from "../components/Bar";
// import Post from "../components/Post";
import { getPostById } from "../utils/firebaseUtil";

// const useStyles = makeStyles(() =>
//   createStyles({
//     postButton: {
//       position: "absolute",
//       right: "10px",
//       bottom: "10px"
//     }
//   })
// );

export default function PostPage(props: any) {
  //   const classes = useStyles();
  console.log(props);

  return (
    <div>
      <Bar />
      {props.post.id}
      {/* <Post key={post.id} content={post.content} /> */}
    </div>
  );
}

PostPage.getInitialProps = async ({ query }: { query: any }) => {
  const post = await getPostById(query.id);
  console.log(post);
  return { post };
};
