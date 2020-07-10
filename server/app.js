require("dotenv").config();

const path = require("path");
const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connection to mongo successful!"))
  .catch((err) => console.error(`Connection to mongo failed! ${err}`));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

app.use("/stats", routes.stats);

app.use((req, res, next) => {
  res.status(404);
  res.send(`invalid route ${req.url}`);
  next();
});

const PORT = process.env.PORT | 4000;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`api server running on port ${PORT}`));
