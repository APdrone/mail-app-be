const Mail = require("../model/mailmodel");

exports.getAllMailsTo = async (req, res, next) => {
  try {
    const { user, tag } = req.query;

    const mails = await Mail.find({ toUser: user, tag: tag });

    res.status(200).json({
      status: "success",
      total: mails.length,
      mails,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllMailsFrom = async (req, res, next) => {
  try {
    const { fromUsr, tag } = req.query;

    const mails = await Mail.find({
      fromUser: fromUsr,
      tag: tag,
    });

    res.status(200).json({
      status: "success",
      total: mails.length,
      mails,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createMail = async (req, res, next) => {
  try {
    // const {toUser,ccUser,bccUser,fromUser,subject,body,tag}=req.body;

    const newMail = await Mail.create({
      ...req.body,
    });

    res.status(200).json({
      status: "success",
      mail: newMail,
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      msg: err.message,
    });
  }
};
