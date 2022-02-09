require("dotenv").config();
const express = require("express");
const app = express();

const userRouter = require("./api/user/user.router");
const StudentRouter = require("./api/Participent/participent.router");

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/register", StudentRouter);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
