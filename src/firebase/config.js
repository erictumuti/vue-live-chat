import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyAWX98jy51V5VjJSntkHRq9JO7bDNZ2ojw",
	authDomain: "vue-firebase-sites-cede3.firebaseapp.com",
	projectId: "vue-firebase-sites-cede3",
	storageBucket: "vue-firebase-sites-cede3.appspot.com",
	messagingSenderId: "193679739942",
	appId: "1:193679739942:web:9c949c2bc33b8e3db22ae7"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp }