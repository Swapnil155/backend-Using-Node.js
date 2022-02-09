const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into user (name,email,password)
            values(?,?,?)`,
      [data.name, data.email, data.password],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getByUserEmailId: (email, callBack) => {
    pool.query(
      `select * from user where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByID: (id, callBack) => {
    pool.query(
      `select * From user where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getStdByID: (id, callBack) => {
    pool.query(
      `select * From registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  allStudentData: callBack => {
    pool.query(
      `Select * from registration`,
      [],
      (error, results, fields) => {
        if (error) {
          console.log(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateStudent : (data, callBack) => {
    pool.query(
      `Update user Set name=?, email=?, password=? where id = ?`,
      [data.username,
      data.email,
    data.password,
  data.id],
    (error, results, fields) => {
      if(error){
        console.log(error);
      }
      return callBack(null, results)
    }
    )
  }
};
