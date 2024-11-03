// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, deleteDoc, updateDoc, onSnapshot, doc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzwRzuL730q3AosTRnks0nojwNkHnSnKY", //Add api key
  authDomain: "to-do-app-45049.firebaseapp.com", //Add authDomain
  databaseURL: "https://to-do-app-45049-default-rtdb.firebaseio.com", //Add projectId
  projectId: "to-do-app-45049", //Add storageBucket
  storageBucket: "to-do-app-45049.firebasestorage.app", //Add messagingSenderId
  messagingSenderId: "345173607030",
  appId: "1:345173607030:web:ffcf8c030a4e0b018e5557" //Add appId
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

