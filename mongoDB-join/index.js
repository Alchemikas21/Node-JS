const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 3000;
const URI = process.env.URI;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.use(express.json());
//distinct pavyzdys
//distinct naudojamas norint gauti visas skirtingas reiksmes, pavyzdiui zmoniu vardai ir t.t.
//parodo masyva su visais pasirinktais distinct atributais
app.get("/user-analysis", async (req, res) => {
  try {
    const docs = [];
    const con = await client.connect();
    const db = con.db("node-mongo-eshop");
    const collection = db.collection("users");
    const names = await collection.distinct("age", {
      age: 14, //parodo atitinkamai kiek 14 metu yra
    }); //pvz dar name surname gali buti

    const currentlyOnlineUsers = await collection.count({
      isOnline: true, //turi ismesti skaiciu turinciu si parametra
    });

    const aggregationCursor = collection.aggregate(pipeline);

    for await (const doc of aggregationCursor) {
      docs.push(doc);
    }
    await con.close();

    res.send({ docs, names, currentlyOnlineUsers }).end();
  } catch (error) {
    res.status(500).send({ error }).end;
  }
});

app.listen(PORT, async () => console.log(`server is running on ${PORT}`));
