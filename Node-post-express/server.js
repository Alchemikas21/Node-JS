const express = require("express");
const app = express();

const carBrands = ["Mazda", "Mitsubishi", "Subaru", "Nissan", "Toyota"];

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (_, res) => {
  res.send(carBrands);
});

app.post("/", (req, res) => {
  const newCarList = [...carBrands, "Ford"];
  res.send({ cars: newCarList });
});

app.listen(PORT, () => {
  console.warn(`server is running on port ${PORT}`);
});

// 1. Susikurkite naują node.js pratimą, įsidiekite express/cors.

// 2. Sukurkite array, kuriame bus saugomi mašinų brand'ai.

// 3. Sukurkite GET, kuris paduos visą array.

// 4. Sukurkite POST, kuris į array įrašys naują automobilio brandą.

// Testuokite su PostMan.
