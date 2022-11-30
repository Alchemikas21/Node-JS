const express = require("express");
const app = express();
const PORT = 5000;

const cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"],
};

app.use(express.json());

app.get("/cars/:brand"),
  (req, res) => {
    const firstCar = Object.values(cars)[0];
    const secondCar = Object.values(cars)[1];
    const thirdCar = Object.values(cars)[2];

    res.send(firstCar);
  };

app.listen(PORT, () => {
  console.warn(`server is running on port ${PORT}`);
});
