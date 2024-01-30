const express = require("express");
const router = express.Router();

const userController = require("../controllers/sales");

router.get("/", userController.getAll);

router.get("/:id", userController.getSingle);

router.post("/", userController.createSale);

router.put("/:id", userController.updateSale);

router.delete("/:id", userController.deleteSale);

module.exports = router;
