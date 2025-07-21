const db = require("./firebase");

async function test() {
  const docRef = db.collection("todos").doc("test");
  await docRef.set({ text: "Hello from Firebase!" });
  console.log("Document written successfully!");
}

test();

