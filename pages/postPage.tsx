import React from "react";
import Post from "../components/Post";
import Commnet from "../components/Comment";
import { getPostById } from "../utils/firebaseUtil";
import { getCommentsByPost } from "../utils/firebaseUtil";
import { comment } from "../utils/firebaseUtil";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
export default function PostPage(props: any) {
  const [commentProgress, setCommentProgress] = React.useState(false);
  const [commentValue, setCommentValue] = React.useState("");

  const [commentValues, setCommentValues] = React.useState([{}]);

  const handleOnchange = (e: any) => {
    setCommentValue(e.target.value);
  };

  const handleComment = () => {
    comment("testUser", props.post.id, commentValue);
    let tmpCommentValues = commentValues.push({
      comment: commentValue
    });
    console.log(tmpCommentValues);

    // setCommentValues(tmpCommentValues);
    setCommentProgress(false);
  };

  React.useEffect(() => {
    console.log(props.comments);
    setCommentValues(props.comments);
    console.log(commentValues);
  });

  return (
    <div>
      <div>
        <Post content={props.post.content} />
      </div>
      {commentValues.map((comment: any) => (
        <Commnet comment={comment.comment} />
      ))}

      {commentProgress ? (
        <div>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={e => handleOnchange(e)}
          />
          <Button variant="outlined" color="primary" onClick={handleComment}>
            Done
          </Button>
        </div>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setCommentProgress(true);
          }}
        >
          Comment
        </Button>
      )}
    </div>
  );
}

PostPage.getInitialProps = async ({ query }: { query: any }) => {
  const post = await getPostById(query.id);
  const comments = await getCommentsByPost(query.id);
  return { post, comments };
};
