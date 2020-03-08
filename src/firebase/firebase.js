import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCcxnjD9xy09MkKi6mAQnKznF-wVrXJR80",
    authDomain: "expensify-2066d.firebaseapp.com",
    databaseURL: "https://expensify-2066d.firebaseio.com",
    projectId: "expensify-2066d",
    storageBucket: "expensify-2066d.appspot.com",
    messagingSenderId: "686643271612",
    appId: "1:686643271612:web:c4a78c8e793e9dc765bdb9",
    measurementId: "G-5KB3KVSR0W"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: "Amir"
});