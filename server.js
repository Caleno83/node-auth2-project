const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const usersRouter = require("./users/userRouter")

const server = express();

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use(usersRouter)

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong, please try again later",
  });
});

server.get("/", (req, res) => {
  res.send(`<h2>Welcome To My Module 2 Auth Project</h2>`);
});

module.exports = server;