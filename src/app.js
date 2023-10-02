const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const UserRoutes = require("./routes/UserRoutes");

app.use("/api/usuario", UserRoutes);

module.exports = app;
