import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

const fireBaseConfig = {
  apiKey: "AIzaSyANDdxNVl4mZvs6c_1FiXdXiAYc5oWGWb8",
  authDomain: "user-managment-600dc.firebaseapp.com",
  databaseURL: "https://user-managment-600dc-default-rtdb.firebaseio.com",
  projectId: "user-managment-600dc",
  storageBucket: "user-managment-600dc.appspot.com",
  messagingSenderId: "583884645303",
  appId: "1:583884645303:web:27ec548103eca88c98fe32",
};

firebase.initializeApp(fireBaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true });

export default firebase;
