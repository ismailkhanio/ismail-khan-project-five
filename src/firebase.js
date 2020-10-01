// firebase.js
import firebase from 'firebase';
// import 'firebase/database';

// initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyCOosVNEbeMxbQz0KSzr7jAIdaiX4ldWiw",
  authDomain: "mr-robot-computer-supply.firebaseapp.com",
  databaseURL: "https://mr-robot-computer-supply.firebaseio.com",
  projectId: "mr-robot-computer-supply",
  storageBucket: "mr-robot-computer-supply.appspot.com",
  messagingSenderId: "253179351098",
  appId: "1:253179351098:web:3a15841ffae890c547a503",
};

firebase.initializeApp(firebaseConfig);


// export the above configuration to firebase
export default firebase;
