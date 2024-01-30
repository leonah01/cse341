const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection("sales").find();
  result.toArray().then((sales) => {
    res.setHeader("Content-Type", "application/json");
    res.json(sales);
  });
};

const getSingle = async (req, res) => {
  const salesId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection("sales")
    .find({ _id: salesId });
  result.toArray().then((sales) => {
    res.setHeader("Content-Type", "application/json");
    res.json(sales[0]);
  });
};

const createSale = async (req, res) => {
  //#swagger.tags = ["sales]
  const sale = {
    carType: req.body.carType,
    location: req.body.location,
    price: req.body.price,
    color: req.body.color,
    condition: req.body.condition,
    ownerGender: req.body.ownerGender,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("sales")
    .insertOne(sale);
  if (response.acknowledged > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "some error occurred while updating the sale.");
  }
};

const updateSale = async (req, res) => {
  //#swagger.tags = ["sales]
  const saleId = new ObjectId(req.params.id);
  const sale = {
    carType: req.body.carType,
    location: req.body.location,
    price: req.body.price,
    color: req.body.color,
    condition: req.body.condition,
    ownerGender: req.body.ownerGender,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("sales")
    .replaceOne({ _id: saleId }, sale);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "some error occurred while updating the sale.");
  }
};

const deleteSale = async (req, res) => {
  //#swagger.tags = ["sales]
  const saleId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("sales")
    .deleteOne({ _id: saleId });
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "some error occurred while updating the sale.");
  }
};

module.exports = {
  getAll,
  getSingle,
  createSale,
  updateSale,
  deleteSale,
};
