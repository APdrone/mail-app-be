const express = require("express");
const mailController = require("../controllers/mailController");
const router = express.Router();

router
  .get("/", mailController.getAllMailsTo)
  .get("/sent", mailController.getAllMailsFrom)
  .post("/", mailController.createMail);

module.exports = router;
