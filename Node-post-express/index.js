const express = require("express");
const app = express();

require("dotenv").config(); // konfiguruoja, kad galima butu naudoti package - dotenv metoda config(). nustatcius bibliotek ji nuskaito .env faila.//
//env failas naudojamas del saugumo, paprastumo//
const PORT = process.env.PORT || 5000; //is env failo paims porta, norint ji nuskaityti reikia package - //
// || 5000 yra defaultinis portas nustatytas, suveiks, jei pvz bus netinkamas env faile ir t.t.//

app.use(express.json());

app.post("/", (_, res) => {
  // jei nenaudojamas request, galima ideti underscore _//
  res.send({ message: "welcome to my project" }); //atsakymas siuncia tam tikra informacija//
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
