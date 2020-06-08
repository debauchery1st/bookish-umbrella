const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const router = require("./api-router");
// const tokenStore = require("../tests/keymaster").getInstance();
// tokenStore.new = false;
// tokenStore.title = "testing";
// console.log(tokenStore);
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", router);
server.use(express.static("public"));
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
module.exports = server;
