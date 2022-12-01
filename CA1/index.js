const express = require("express");
const casual = require("casual");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (_, res) => {
  try {
    const randomNumber = Math.round(Math.random() * 10);
    const randomCity = casual.city;
    const randomName = casual.name;
    const randomSurname = casual.last_name;
    console.log(randomNumber);
    res.status(200);
    res.send({
      message: `${randomCity} is number ${randomNumber} on our list! P.S Valuated by ${randomName} ${randomSurname}`,
    });
    res.end();
  } catch (error) {
    console.error("error!something went wrong!");
  }
});

app.listen(PORT, () => {
  console.info("server is running");
});
