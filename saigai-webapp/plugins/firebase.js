import firebase from 'firebase/app';
 import 'firebase/auth';
 import 'firebase/firestore';
 import 'firebase/storage';
 import 'firebase/analytics';
 
 const config = {
   apiKey: process.env.API_KEY,
   authDomain: process.env.AUTH_DOMAIN,
   projectId: process.env.PROJECT_ID,
   storageBucket: process.env.STRAGE_BUCKET,
   messagingSenderId: process.env.MESSAGEING_SENDER_ID,
   appId: process.env.APP_ID,
   measurementId: process.env.MEASUREMENT_ID,
 };
 
 if (!firebase.apps.length) {
   firebase.initializeApp(config);
   firebase.firestore();
 }
 export const auth = firebase.auth;
 export default firebase;
