require("dotenv").config();

const path = require("path");
const http = require("http");
const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connection to mongo successful!"))
  .catch((err) => console.error("Connection to mongo failed! ${err}"));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("/:rest", (req, res) => res.send(`Hi from ${req.path}`));

app.use((req, res, next) => {
  res.status(404);
  res.send("failed");
  next();
});

const { PORT } = process.env;
app.listen(PORT, () => console.log(`api server running on port ${PORT}`));
