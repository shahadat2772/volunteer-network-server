const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

// MiddleWere
app.use(express.json());
app.use(cors());

// Getting connected to DB

const uri =
  "mongodb+srv://volunteer:<password>@cluster0.uqdlk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("DB CON");
  client.close();
});

app.get("/", (req, res) => {
  res.send("Volunteers are Ready");
});

app.listen(port, () => {
  console.log("Responding to", port);
});
