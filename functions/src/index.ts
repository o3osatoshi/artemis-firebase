import * as functions from "firebase-functions";
import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

initializeApp();
const db = getFirestore();

exports.createUser = functions.firestore
  .document("customers/{customerId}")
  .onCreate((snap, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    const newValue = snap.data();

    // access a particular field as you would any JS property
    const name = newValue.name;
    console.log(name);

    // perform desired operations ...
    // Add a new document with a generated id.
    db.collection("messages")
      .add({
        name: newValue.name,
        message: "Hello Firebase!",
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      });
  });
