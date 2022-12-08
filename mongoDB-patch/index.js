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

app.patch("/user/:id", async (req, res) => {
  //patikrinti ar age firstname ir lastname pateikti tinkami
  const id = req.params.id;
  const { name, surname } = req.body;
  try {
    const con = await client.connect();
    const db = con.db("node-mongo-eshop");

    const user = await db
      .collection("users")
      .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { name, surname } });

    await con.close();

    res.send(user).end();
  } catch (error) {
    return res.send({ error }).res.end();
  }
});

// app.patch('/user/:id', function (req, res) {
//     var updateObject = req.body; // {last_name : "smith", age: 44}
//     var id = req.params.id;
//     db.users.update({_id  : ObjectId(id)}, {$set: updateObject});
// });
app.listen(PORT, () => console.log("server is running"));
