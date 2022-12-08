const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

// app.use(express.json());

// app.get("/users/", async (_, res) => {
//   const connection = await client.connect();
//   const data = await connection
//     .db(DATABASE)
//     .collection(DBCOLLECTION)
//     .find()
//     .toArray();

//   await connection.close();

//   res.send(data).end;
// });

// dynamic get-find pavyzdys naudojant id  mongoDB//
app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DATABASE)
      .collection(DBCOLLECTION)
      .findOne({ _id: ObjectId(id) });
    // pvz id: 638e1b6de385386d34a3b237 ismeta jonas valanciunas objekta
    await connection.close();
    res.send(data);
  } catch (err) {
    res.status(500).send({ error: "wrong link presented" });
  }
});

//mongoDB pavyzdys pagal varda ir pavarde filterinimo//
// ieskai postmene: localhost:5000/filtered-users?name=Jonas&surname=Valanciunas
app.get("/filtered-users", async (req, res) => {
  const { name, surname } = req.query; //query skirtas filtruoti

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DATABASE)
      .collection(DBCOLLECTION)
      .find({ name, surname })
      .toArray();

    await connection.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

// app.post("/user", async (req, res) => {
//   const { firstName, lastName } = req.body;

//   if (typeof firstName !== "string" || typeof lastName !== "string") {
//     res.status(400);
//     res.send({ message: "first name or last name is invalid" });
//     res.end;
//     return;
//   }
//   try {
//     const con = await client.connect();
//     const dbRes = await con
//       .db(DATABASE)
//       .collection(DBCOLLECTION)
//       .insertOne({ name: firstName, surname: lastName });
//     await con.close();
//     return res.send(dbRes);
//   } catch (err) {
//     res.status(500).send({ err });
//   }
// });

app.listen(PORT, () => console.log("server is running"));
