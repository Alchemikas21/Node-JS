const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static("public"));
//viska is folderio public ikels i backenda//

app.get("/", (_, res) => {
  res.json({ info: "preset text" });
});

app.post("/", (req, res) => {
  const { parcel } = req.body;
  res.status(200).send({ status: "received" });
});

app.listen(PORT, () => {
  console.warn(`server is running on port ${PORT}`);
});
