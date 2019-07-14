import * as firebase from 'firebase';

import * as expensesActions from '../actions/expenses';


const firebaseConfig = {
    apiKey: "AIzaSyAZ792gc1SnwgeIsvqFgzp72TtnXdT7e-U",
    authDomain: "aindiab-expensify.firebaseapp.com",
    databaseURL: "https://aindiab-expensify.firebaseio.com",
    projectId: "aindiab-expensify",
    storageBucket: "",
    messagingSenderId: "52037584077",
    appId: "1:52037584077:web:0061f3c879018b3a"
};

firebase.initializeApp(firebaseConfig);


const database = firebase.database();

export { firebase, database as default }