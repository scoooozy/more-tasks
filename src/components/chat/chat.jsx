// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDTzCPnpRRckE0h2oYTbPlbOob3sdnGplI",
  authDomain: "morchat-37562.firebaseapp.com",
  projectId: "morchat-37562",
  storageBucket: "morchat-37562.appspot.com",
  messagingSenderId: "358058121062",
  appId: "1:358058121062:web:1686b90454da38a9d71aa7",
  measurementId: "G-1G9CE56SKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Chat(){
  <div>
    <p>hello world</p>
  </div>
}
export default Chat;