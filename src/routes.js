const express = require("express");

const routes = express.Router();

const DocController = require("./controllers/DocController");

routes.get("/", (req, res) => res.send('Doc generator API'));
routes.post("/generate", DocController.generate);

module.exports = routes;
