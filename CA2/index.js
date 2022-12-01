// Sukurkite NodeJS projektą, kuris GET / paduos automobilių brandus (t.y. array su automobilių brandais:
//  pvz. ["BMW", "VW, "Porsche"]). Su atskiru aplanku, kur bus front-end'as (index.html) pasiimkite šiuos duomenis (naudojant Fetch)
//  ir atvaizduokite juos unordered list'e.

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const carList = ["BMW", "VW", "MAZDA"];

app.use(express.urlencoded());
app.use(cors());

app.post("/", (_, res) => {
  try {
    res.status(200);
    res.send(carList);
    res.end();
  } catch (error) {
    console.error("error!something went wrong!");
  }
});

app.listen(PORT, () => {
  console.info(`server is running on port ${PORT}`);
});
