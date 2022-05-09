import firebase from "firebase/compat/app"
import "firebase/compat/auth"


const app = firebase.initializeApp({
    apiKey: "AIzaSyD57vOeg2b474t0Jmr5VpOILs9I5e8kAec",
    authDomain: "e-commerce-e8711.firebaseapp.com",
    projectId: "e-commerce-e8711",
    storageBucket: "e-commerce-e8711.appspot.com",
    messagingSenderId: "589769805434",
    appId: "1:589769805434:web:d99f0af872ac0d4f7575c3"
  })


  export default app
  export const auth = app.auth() 