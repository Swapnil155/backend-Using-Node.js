const {
  createUser,
  login,
  Student,
  AllStudents,
  updateStudent
} = require("./user.controller");
const { checkToken } = require("../../auth/jwtVerification");
const router = require("express").Router();

router.post("/", createUser);
router.post("/login", login);
router.get("/:id", checkToken, Student);
router.patch("/update/", checkToken, updateStudent)
router.get("/all/std", checkToken, AllStudents);

module.exports = router;
