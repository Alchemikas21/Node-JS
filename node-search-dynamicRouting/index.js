const express = require("express");
require("dotenv").config();

const PORT = +process.env.PORT || 5000;
const users = [];
const app = express();

app.use(express.json());

app.get("/user/:userId", (req, res) => {
  const { userId } = req.params;
  const user = users.find((curUser) => curUser.userId === userId); // irasant === userId get negrazina user
  console.log(user);
  console.log(userId);
  res.send(user ?? { info: "user not found" }).end();
});

app.post("/create-user", (req, res) => {
  console.log(req.body);

  const { age, firstName, userId } = req.body;

  const isNumber = (value) => {
    return typeof value === "number" && !Number.isNaN(value);
  };

  if (
    typeof firstName !== "string" ||
    typeof userId !== "string" ||
    !isNumber(age)
  ) {
    res.status(400).send({ message: "invalid user data provided" }).end();
    return;
  }

  const user = { age, firstName, userId };
  users.push(user);

  res.send({ message: "data is correct" });
  res.end();
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
