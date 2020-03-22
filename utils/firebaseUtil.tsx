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

// const firestore = firebase.firestore();
const auth = firebase.auth();

const googleAuthenticate = () => {
  const authProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(authProvider).then((result: any) => {
    console.log("aaa");
    debugger;

    const authUser = {
      uid: result.user.uid,
      email: result.user.email,
      name: result.user.displayName,
      photo: result.user.photoURL
    };
    return authUser;
  });
};

export { googleAuthenticate };
