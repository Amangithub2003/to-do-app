const express = require("express");
const cors = require("cors");
const db = require("./firebase");

const app = express();
app.use(cors());
app.use(express.json());

const todosCollection = db.collection("todos");

// ✅ Root route
app.get("/", (req, res) => {
  res.send("✅ To-Do List Backend is running");
});

// Create
app.post("/todos", async (req, res) => {
  const data = req.body;
  const docRef = await todosCollection.add(data);
  res.send({ id: docRef.id });
});

// Read
app.get("/todos", async (req, res) => {
  const snapshot = await todosCollection.get();
  const todos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.send(todos);
});

// Update
app.put("/todos/:id", async (req, res) => {
  await todosCollection.doc(req.params.id).update(req.body);
  res.send({ status: "Updated" });
});

// Delete
app.delete("/todos/:id", async (req, res) => {
  await todosCollection.doc(req.params.id).delete();
  res.send({ status: "Deleted" });
});

app.listen(3000, '0.0.0.0', () => console.log("Server running on port 3000"));



