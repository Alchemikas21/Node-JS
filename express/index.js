//express fetch api serverio kurimas?//
const express = require("express");
const app = express();
/* arba galimas rasyti:
const express = require("express");
const app = express();
*/
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.send(["BMW", "AUDI", "VW"]); //["BMW", "AUDI", "VW"]//
});

app.post("/", (req, res) => {
  // pateikiant post uzklausa jis nurodys age nusattayta posto bodyje//
  const age = req.body.age;
  const providedAge = age ? age : 10;
  //ternary nurodo defaultini age - 10//
  //arba galima naudoti ||
  res.send({ age: providedAge * 2 }); //["BMW", "AUDI", "VW"]//
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
/* parodo kuriame porte klausyti requesto*/
