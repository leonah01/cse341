const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection("clients").find();
  result.toArray().then((clients) => {
    res.setHeader("Content-Type", "application/json");
    res.json(clients);
  });
};

const getSingle = async (req, res) => {
  const clientsId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection("clients")
    .find({ _id: clientsId });
  result.toArray().then((clients) => {
    res.setHeader("Content-Type", "application/json");
    res.json(clients[0]);
  });
};

const createClient = async (req, res) => {
  //#swagger.tags = ["clients]
  const client = {
    customer: req.body.customer,
    sport: req.body.sport,
    favoriteColor: req.body.favoriteColor,
    purpose: req.body.purpose,
    amount: req.body.amount,
    cases: req.body.cases,
    date: req.body.date,
    time: req.body.time,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("clients")
    .insertOne(client);
  if (response.acknowledged > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "some error occurred while updating the client.");
  }
};

const updateClient = async (req, res) => {
  //#swagger.tags = ["clients]
  const clientId = new ObjectId(req.params.id);
  const client = {
    customer: req.body.customer,
    sport: req.body.sport,
    favoriteColor: req.body.favoriteColor,
    purpose: req.body.purpose,
    amount: req.body.amount,
    cases: req.body.cases,
    date: req.body.date,
    time: req.body.time,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("clients")
    .replaceOne({ _id: clientId }, client);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "some error occurred while updating the client.");
  }
};

const deleteClient = async (req, res) => {
  //#swagger.tags = ["clients]
  const clientId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("clients")
    .deleteOne({ _id: clientId });
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "some error occurred while updating the client.");
  }
};

module.exports = {
  getAll,
  getSingle,
  createClient,
  updateClient,
  deleteClient,
};
