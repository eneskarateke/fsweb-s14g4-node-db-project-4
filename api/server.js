const express = require("express");

const tarifRouter = require("./tarif/tarif-router.js");

const server = express();

server.use(express.json());
server.use("/api/tarif", tarifRouter);

module.exports = server;
