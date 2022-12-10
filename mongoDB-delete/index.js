const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 3000;
const URI = process.env.URI;
const DATABASE = process.env.DATABASE;
const DBCOLLECTION = process.env.DBCOLLECTION;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.use(express.json());

//deletina useri pagal requesto body pateikta varda ir pavarde
app.delete("/user/delete-user", async (req, res) => {
  const { name, surname } = req.body;
  const connection = await client.connect();
  const data = await connection
    .db(DATABASE)
    .collection(DBCOLLECTION)
    .deleteOne({ name, surname });

  await connection.close();

  res.send(data).end;
});

//insert many pavyzdys
app.post("/user", async (req, res) => {
  const newUserNames = req.body;
  const areNamesProvided = Array.isArray(newUserNames) && newUserNames?.length;

  const isCorrectUserName = (newUserNames) => {
    const { type, item, quantity } = newUserNames;
  };

  if (!areNamesProvided) {
    // tikrina ar paduodamas body yra arejus
    return res.send({ message: "please provide an array with orders" }).end();
  }

  newUserNames.forEach(isCorrectUserName);

  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DATABASE)
      .collection(DBCOLLECTION)
      .insertMany(newUserNames);

    await con.close();

    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});
app.listen(PORT, () => console.log("server is running"));
