const express = require("express");
const cors = require("cors");

const PORT = 5000;
const app = express();
const users = [{ name: "Jonas" }, { name: "Antanas" }];

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const userId = +req.params?.userId;

  if (userId <= users.length - 1 && userId >= 0) {
    res.send(users[userId]);
  }

  res.send({ info: "user not found" });
});

app.post("/", (req, res) => {
  const age = req.body.age;
  const providedAge = age ? age : 10;
  res.send({ age: providedAge * 2 });
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
