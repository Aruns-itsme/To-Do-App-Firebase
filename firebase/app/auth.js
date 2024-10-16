// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, deleteDoc, updateDoc, onSnapshot, doc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "", //Add api key
  authDomain: "", //Add authDomain
  projectId: "", Add projectId
  storageBucket: "", Add storageBucket
  messagingSenderId: "", Add messagingSenderId
  appId: "" Add appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign Up Function
export function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log("User signed up:", userCredential.user);
      window.location.href = "tasks.html";
    })
    .catch(error => {
      console.error("Sign up error:", error);
    });
}

// Login Function
export function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log("User logged in:", userCredential.user);
      window.location.href = "tasks.html";
    })
    .catch(error => {
      console.error("Login error:", error);
    });
}

// Logout Function
export function logout() {
  signOut(auth).then(() => {
    console.log("User logged out");
    window.location.href = "index.html";
  }).catch(error => {
    console.error("Logout error:", error);
  });
}

// Monitor Authentication State
onAuthStateChanged(auth, user => {
  if (user) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("task-container").style.display = "block";
    fetchTasks(user.uid);
  } else {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("task-container").style.display = "none";
  }
});

