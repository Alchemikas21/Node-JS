const express = require("express");
const cors = require("cors");

require("dotenv").config();

const names = ["Antanas", "Petras", "Juozas"];
const PORT = +process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.unsubscribe(cors());

app.get("/", (_, res) => {
  res.send(names);
  res.end();
});

app.post("/", (req, res) => {
  const { name } = req.body;
  const doesNameExist = names.find((curName) => curName === name);

  if (!name.length > 0 && typeof name !== "string") {
    res.status(400).end("incorrect name provided");
    return;
  }

  if (doesNameExist) {
    res.status(400).end("this name already exists");
    return;
  }

  names.push(name);

  res.send(names);
  res.end();
});

app.listen(PORT, () => console.warn("Server is running okay"));
