const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userroutes");
const mailRouter = require("./routes/mailroute");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/mail", mailRouter);

module.exports = app;
