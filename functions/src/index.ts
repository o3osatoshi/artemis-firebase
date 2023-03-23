import * as functions from "firebase-functions";

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
  });
