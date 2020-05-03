const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const T = require('./Mods/getArbPairs.js');

T.startServer()
  .then(() => {
    return T.getPairs();
  }).then(() => {
    T.calculate();
  }).catch(err => {
    console.log(err);
  });
