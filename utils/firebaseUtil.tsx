import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGIN_SENDER_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

const firestore = firebase.firestore();
const auth = firebase.auth();

/**
 * Authentication
 */

//Google Authentication
const googleAuthenticate = () => {
  const authProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(authProvider).then((result: any) => {
    const authUser = {
      uid: result.user.uid,
      email: result.user.email,
      name: result.user.displayName,
      photo: result.user.photoURL
    };
    return authUser;
  });
};

/**
 * follow fucntions
 */
const followUser = (followUserId: string, followerUserId: string) => {
  firestore.collection("follows").add({
    followUserId: followUserId,
    followerUserId: followerUserId
  });
};

const UnFollowUser = (followUserId: string, followerUserId: string) => {
  firestore
    .collection("follows")
    .where("followUserId", "==", followUserId)
    .where("followerUserId", "==", followerUserId)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log("Document successfully deleted!");
        doc.ref.delete();
      });
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error deleting document: ", error);
    });
};

/**
 * like fucntions
 */
const likePost = (likeUserId: string, likePostId: string) => {
  firestore.collection("likes").add({
    likeUserId: likeUserId,
    likePostId: likePostId
  });
};

const UnLikePost = (likeUserId: string, likePostId: string) => {
  firestore
    .collection("likes")
    .where("likeUserId", "==", likeUserId)
    .where("likePostId", "==", likePostId)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log("Document successfully deleted!");
        doc.ref.delete();
      });
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error deleting document: ", error);
    });
};

/**
 * comment fucntions
 */
const comment = (userId: string, postId: string, comment: string) => {
  firestore.collection("comments").add({
    userId: userId,
    postId: postId,
    comment: comment
  });
};

const deleteComment = (commentId: string) => {
  firestore
    .collection("comments")
    .doc(commentId)
    .get()
    .then(function(doc) {
      doc.ref.delete();
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error deleting document: ", error);
    });
};

/**
 * comment fucntions
 */
const upsertPost = (postId: string, userId: string, content: string) => {
  //ToDo:user validation
  if (postId) {
    firestore
      .collection("posts")
      .doc(postId)
      .set({
        content: content
      });
  } else {
    firestore.collection("posts").add({
      userId: userId,
      content: content
    });
  }
};

const deletePost = (commentId: string) => {
  firestore
    .collection("posts")
    .doc(commentId)
    .get()
    .then(function(doc) {
      doc.ref.delete();
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error deleting document: ", error);
    });
};

export {
  googleAuthenticate,
  followUser,
  UnFollowUser,
  likePost,
  UnLikePost,
  comment,
  deleteComment,
  upsertPost,
  deletePost
};
