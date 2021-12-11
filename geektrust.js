const express = require("express");

const app = express();

app.use(express.json());

const initializeServer = () => {
  app.listen(3002, () => {
    console.log("server is running at http://localhost:3002/");
  });
};

initializeServer();

app.get("/", async (req, res) => {
  res.status(200).json({ msg: "welcome to api" });
});
