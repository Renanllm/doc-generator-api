require("dotenv").config();

const express = require("express");
const cors = require("cors");
const server = express();
const port = process.env.SERVER_PORT || 5000;

server.use(cors());
server.use(express.json());
server.use(express.static("docs"));

server.use("/api", require("./routes"));

server.listen(port, () => console.log(`Server started on ${port} port`));
