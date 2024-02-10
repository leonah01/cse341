const validator = require("../helpers/validate");

const saveSale = (req, res, next) => {
  const validationRule = {
    carType: "required|string",
    location: "required|string",
    price: "required|numeric",
    color: "required|string",
    condition: "required|string",
    ownerGender: "required|string",
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};

const saveClient = (req, res, next) => {
  const validationRule = {
    customer: "required|string",
    sport: "required|string",
    favoriteColor: "required|string",
    purpose: "required|string",
    amount: "required|numeric",
    cases: "required|integer",
    date: "required|date",
    time: "require|string",
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};

module.exports = { saveSale, saveClient };
