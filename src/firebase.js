import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDM3Igw9cEIJnQBEzb9OAlAzb3SF1XcKVo',
  authDomain: 'challange-5f62a.firebaseapp.com',
  projectId: 'challange-5f62a',
  storageBucket: 'challange-5f62a.appspot.com',
  messagingSenderId: '392794852434',
  appId: '1:392794852434:web:09c8a499a58a5a9b21638b',
  measurementId: 'G-0G67QBDRYQ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
