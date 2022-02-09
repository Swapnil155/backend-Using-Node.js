const { Register } = require("./participent.controller");
const StudentRouter = require("express").Router();

StudentRouter.post("/", Register);

module.exports = StudentRouter;
