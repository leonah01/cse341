const express = require("express");
const router = express.Router();

const userController = require("../controllers/sales");
const validation = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/aunthenticate");

router.get("/", userController.getAll);

router.get("/:id", userController.getSingle);

router.post(
  "/",
  isAuthenticated,
  validation.saveSale,
  userController.createSale
)

router.put(
  "/:id",
  isAuthenticated,
  validation.saveSale,
  userController.updateSale
)

router.delete("/:id", isAuthenticated, userController.deleteSale)

module.exports = router
