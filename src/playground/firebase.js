import * as firebase from 'firebase';
import moment from 'moment';
import * as expensesActions from '../actions/expenses';


const firebaseConfig = {
    apiKey: "AIzaSyAZ792gc172TtnXdT7e-U",
    authDomain: "--.firebaseapp.com",
    databaseURL: "https://--.firebaseio.com",
    projectId: "---expensify",
    storageBucket: "",
    messagingSenderId: "520thgh7",
    appId: "1:52037584077:web:0061f3c879018b3a"
};

// Initialize default app
// Retrieve your own options values by adding a web app on
// https://console.firebase.google.com
firebase.initializeApp(firebaseConfig);

const database = firebase.database();


// child_removed
database.ref('expenses')
    .on('child_removed', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
});


// child_changed
database.ref('expenses')
    .on('child_changed', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses')
    .on('child_added', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
});

database.ref('expenses')
    .once('value')
    .then((snapshot) => {
       const expenses = [];

       snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
       });
       console.log(expenses)
    });


database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
         expenses.push({
             id: childSnapshot.key,
             ...childSnapshot.val()
         });
    });
    console.log(expenses)

 });

database.ref('expenses').push({
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
});


database.ref('notes/-LjiZ7APgCVJWpSscx1K').remove()


database.ref('notes').push({
     body: 'Course topic',
     title: 'react native python'
});


database.ref('notes').set(notes);

database.ref().on('value', (snapshot) => {
        console.log(snapshot.val());

    });


database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('Error fetching data', e)
    })


database.ref().set({
    name: 'Mouad Lousimi',
    age: 25,
    isSingle: true,
    stressLevel: 6,
    job: {
        title : 'Software developer',
        company: 'Facebook'
    },
    location: {
        city: 'New York',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved')
}).catch((error) => {
    console.log('This failed', error)
});


database.ref()
  .update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
  }).then(() => {
        console.log('data updated');
  }).catch(() => {
      console.log('did not update data')
  });


database.ref()
 .remove()
 .then(() => {
    console.log('Data removed')
  }).catch((error) => {
    console.log('did not remove data', error)
})