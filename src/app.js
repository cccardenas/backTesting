const express = require("express");
const app = express();
const UserRoutes = require("./routes/UserRoutes");

// Use express.json() middleware to parse JSON request bodies
app.use(express.json());

app.use("/api/usuario", UserRoutes);

module.exports = app;
