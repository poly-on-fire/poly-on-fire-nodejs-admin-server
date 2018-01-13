const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();
admin.initializeApp(functions.config().firebase);
const db = admin.database();
app.get('/timestamp', (req, res) =>{
  res.send(`${Date.now()}`);
});
app.get('/', (req, res) =>{
  res.send(`${Date.now()}`);
  let ref = db.ref("admintest");
  let thing = "Thing "+`${Date.now()}`
  let something = {"Some": thing}
  ref.push().set(something);
});
app.get('/timestamp2', (req, res) =>{
  res.send( "2 "+`${Date.now()}`);
});

exports.app = functions.https.onRequest(app);
