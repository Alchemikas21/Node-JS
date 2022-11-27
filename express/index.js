//express fetch api serverio kurimas?//
const cors = require("cors");
const app = require("express")();
/* arba galimas rasyti:
const express = require("express");
const app = express();
*/
const PORT = 8080;
app.use(cors());
app.get("/tshirt", (req, res) => {
  res.status(200);
  res.send("no t-shirts here");
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
/* parodo kuriame porte klausyti requesto*/
