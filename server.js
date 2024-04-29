require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// DB Connection
const connectToDb = require("./config/connectToDb.js");
connectToDb();

// Models and Controllers
const Note = require("./models/note");
const User = require("./models/user");
const notesController = require("./controllers/notesController.js");
const userController = require("./controllers/userController.js");

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable CORS

// Note Routes
app.get("/notes", notesController.fetchAllNotes);
app.get("/notes/:id", notesController.fetchNote);
app.post("/notes", notesController.createNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);

// User Routes
app.get("/users", userController.fetchAllUsers);
app.get("/users/:id", userController.fetchUser);
app.post("/users", userController.createUser);
app.put("/users/:id", userController.updateUser);
app.delete("/users/:id", userController.deleteUser);

// Home route for basic API check
app.get("/", (req, res) => {
  res.send("This is the Landing Page of the Application");
});

// Starting the Server
app.listen(PORT, () => {
  console.log(`Express Server Listening on port ${PORT}`);
});
