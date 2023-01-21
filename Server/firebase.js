const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAcc.json");
const firebaseConfig = {
  apiKey: "AIzaSyAwF6aqy-75h4QFi4b_IwJ7RnexNey8LDM",
  authDomain: "more-task.firebaseapp.com",
  projectId: "more-task",
  storageBucket: "more-task.appspot.com",
  messagingSenderId: "64954278300",
  appId: "1:64954278300:web:cf08446588fdb815322859",
  measurementId: "G-3VLNPGH6XW",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

module.exports = db;
