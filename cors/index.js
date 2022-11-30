const cors = require("cors");
const app = require("express")();

const carList = ["BMW", "Porsche", "Vw", "Mazda"];

const PORT = 8080;
app.use(cors());
app.get("./html/index.html", (req, res) => {
  res.status(200);
  res.send(carList);
});
app.listen(PORT, () => console.warn(`The server is running on port ${PORT}`));
/* parodo kuriame porte klausyti requesto*/
