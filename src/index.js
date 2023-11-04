import { initializeApp } from "firebase/app";
import {getAuth, 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEY7bgvGqXmAmVNhPeydvelGoRClGrRoo",
  authDomain: "n315-kcm.firebaseapp.com",
  projectId: "n315-kcm",
  storageBucket: "n315-kcm.appspot.com",
  messagingSenderId: "92202648691",
  appId: "1:92202648691:web:193de4db028324bdaf1606",
  measurementId: "G-DB70DYFD1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function initListeners(){
    $("#createAcctBtn").on("click", (e) => {
//console.log("create");
e.preventDefault();
let fName = $("#fNameC").val();
let lName = $("#lNameC").val();
let email = $("#emailC").val();
let pw = $("#pwC").val();
//console.log("name" + fName);

createUserWithEmailAndPassword(auth, email, pw)
.then((userCredential) => {
    // signed up
    const user = userCredential.user;
    console.log(user);
})

.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error Message " + errorMessage);
  });

    });

    $("#signIn").on("click", (e) => {
        //console.log("sign in");
        e.preventDefault();
let email = $("#email").val();
let pw = $("#pw").val();
//console.log("email " + email);

signInWithEmailAndPassword(auth, email, pw)
.then((userCredential) => {
    // signed up
    const user = userCredential.user;
    console.log(user);
})

.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error Message " + errorMessage);
  });

    });

    $("#signOut").on("click", (e) => {
signOut(auth)
.then(() => {
    // signed up
    console.log("signed out");
})

.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error Message " + errorMessage);
  });
    });

}

$(document).ready(function (){
    initListeners();
});

$(".hamburger-icon").on("click", () => {
    $(".hamburger-icon").toggleClass("open");
  
  }); 