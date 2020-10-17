import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDYwJ26gzCHmQUS8cV0T_sbt9OR16eVPy4",
    authDomain: "todoist-clone-a3f85.firebaseapp.com",
    databaseURL: "https://todoist-clone-a3f85.firebaseio.com",
    projectId: "todoist-clone-a3f85",
    storageBucket: "todoist-clone-a3f85.appspot.com",
    messagingSenderId: "920697952870",
    appId: "1:920697952870:web:a161acbb25263a34dfeba7"
})

export {firebaseConfig as firebase}