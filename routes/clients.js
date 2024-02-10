const express = require("express");
const router = express.Router();

const userController = require("../controllers/clients");
const validation = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/aunthenticate");

router.get("/", userController.getAll);

router.get("/:id", userController.getSingle);

router.post(
  "/",
  isAuthenticated,
  validation.saveClient,
  userController.createClient
);

router.put(
  "/:id",
  isAuthenticated,
  validation.saveClient,
  userController.updateClient
);

router.delete("/:id", isAuthenticated, userController.deleteClient);

module.exports = router;
