const {
  createUser,
  login,
  Student,
  AllStudents,
  updateStudent,
  user
} = require("./user.controller");
const { checkToken } = require("../../auth/jwtVerification");
const router = require("express").Router();

router.post("/", createUser);
router.post("/login", login);
router.get("/Student/:id", checkToken, Student);
router.get("/:id", checkToken, user);
router.patch("/update/", checkToken, updateStudent)
router.get("/all/std", checkToken, AllStudents);

module.exports = router;
