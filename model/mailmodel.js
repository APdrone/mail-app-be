const mongoose = require("mongoose");

const mailSchema = new mongoose.Schema(
  {
    toUser: {
      type: String,
      required: [true, "Please provide your reciever name"],
    },
    ccUser: {
      type: String,
    },
    bccUser: {
      type: String,
    },
    fromUser: {
      type: String,
      required: [true, "Please provide your sender name"],
    },
    subject: {
      type: String,
      required: [true, "Please provide your subject"],
    },
    body: {
      type: String,
      required: [true, "Please provide your body"],
    },
    tag: {
      type: String,
      enum: ["sent", "draft"],
    },
  },
  { timestamps: true }
);

const Mail = mongoose.model("Mail", mailSchema);

module.exports = Mail;
