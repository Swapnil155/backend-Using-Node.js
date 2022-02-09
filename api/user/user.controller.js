const {
  create,
  getByUserEmailId,
  getUserByID,
  allStudentData,
  updateStudent,
} = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const key = process.env.SECRET_KEY;
//console.log(key)

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection erro",
        });
      }

      if (!results) {
        return res.json({
          success: 0,
          message: "Fail to Login",
        });
      } else {
        body.password = undefined;
        const jsontoken = sign({ result: results }, key, {
          expiresIn: "1h",
        });
        return res.status(200).json({
          success: 1,
          message: "Register successfull",
          token: jsontoken,
          data: results,
        });
      }
    });
  },
  login: (req, res) => {
    const body = req.body;
    getByUserEmailId(body.email, (error, results) => {
      if (error) {
        console.error(error);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "email and Password invalid",
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        result.password = undefined;
        const jsontoken = sign({ result: results }, key, {
          expiresIn: "1h",
        });
        return res.json({
          success: 1,
          message: "Login successfull",
          token: jsontoken,
        });
      } else {
        return res.json({
          success: 0,
          message: "invalid authenticates",
        });
      }
    });
  },
  Student: (req, res) => {
    const id = req.params.id;
    getUserByID(id, (error, results) => {
      if (error) {
        res.body.json({
          success: 0,
          message: error,
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  AllStudents: (req, res) => {
    allStudentData((error, results) => {
      if (error) {
        console.log(error);
        return
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateStudent : (req, res) => {
    const body = req.body;
    updateStudent(body,(error, results)=>{
      if (error) {
        console.log(error)
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Fail to Login",
        });
      } else {
        return res.status(200).json({
          success: 1,
          message: "update successfull",
          data: results,
        });
      }
    })
  }
};
