import { makeStyles, createStyles } from "@material-ui/core/styles";
import AppBar from "../components/AppBar";
import PostDialog from "../components/PostDialog";

const useStyles = makeStyles(() =>
  createStyles({
    postButton: {
      position: "absolute",
      right: "10px",
      bottom: "10px"
    }
  })
);

export default function Feed() {
  const classes = useStyles();

  return (
    <div>
      <AppBar />
      <div className={classes.postButton}>
        <PostDialog buttonName="Post" />
      </div>
    </div>
  );
}
