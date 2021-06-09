import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBvNrDzNnZkVSfDd8ydeAZqfEyrpwM30jY",
    authDomain: "tesla-clone-8a673.firebaseapp.com",
    projectId: "tesla-clone-8a673",
    storageBucket: "tesla-clone-8a673.appspot.com",
    messagingSenderId: "18313771785",
    appId: "1:18313771785:web:725148f5254bb19df3b1d8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

  export { auth }