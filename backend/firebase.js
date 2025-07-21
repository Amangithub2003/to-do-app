const admin = require("firebase-admin");
const serviceAccount = require("./firebase-key.json");

// Initialize the Firebase app with your service account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Get a reference to Firestore
const db = admin.firestore();

// Export the db so it can be used in other files
module.exports = db;

