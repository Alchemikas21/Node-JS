//mongodb and express get/post //

const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const DATABASE = process.env.DATABASE;
const DBCOLLECTION = process.env.DBCOLLECTION;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.use(express.json());

app.get("/users/", async (_, res) => {
  const connection = await client.connect();
  const data = await connection
    .db(DATABASE)
    .collection(DBCOLLECTION)
    .find()
    .toArray();

  await connection.close();

  res.send(data).end;
});

app.post("/user", async (req, res) => {
  const { firstName, lastName } = req.body;

  if (typeof firstName !== "string" || typeof lastName !== "string") {
    res.status(400);
    res.send({ message: "first name or last name is invalid" });
    res.end;
    return;
  }
  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DATABASE)
      .collection(DBCOLLECTION)
      // .insertOne({ name: "Jonas", surname: "Kazlauskas" });//ivedant prie body poste iraso
      .insertOne({ name: firstName, surname: lastName });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => console.log("server is running"));
