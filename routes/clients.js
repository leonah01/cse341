const express = require("express");
const router = express.Router();

const userController = require("../controllers/clients");

router.get("/", userController.getAll);

router.get("/:id", userController.getSingle);

router.post("/", userController.createClient);

router.put("/:id", userController.updateClient);

router.delete("/:id", userController.deleteClient);

module.exports = router;
