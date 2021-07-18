import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBmpxtpPeiNwp3GH1WfQ14i4DFwA0poJNg",
    authDomain: "bennovela-firegram.firebaseapp.com",
    projectId: "bennovela-firegram",
    storageBucket: "bennovela-firegram.appspot.com",
    messagingSenderId: "14132523819",
    appId: "1:14132523819:web:043835ddf8550e4b4ccb6e"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp };