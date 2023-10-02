const express = require("express");
const app = express();
const UserRoutes = require("./routes/UserRoutes");
const cors = require("cors"); // Import the cors middleware

// Use cors middleware to allow cross-origin requests from any origin
app.use(cors());

// Use express.json() middleware to parse JSON request bodies
app.use(express.json());

app.use("/api/usuario", UserRoutes);

module.exports = app;
