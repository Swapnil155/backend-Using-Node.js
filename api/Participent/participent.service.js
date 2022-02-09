const { query } = require("../../config/database");
const pool = require("../../config/database");

module.exports = {
  registerParticipent: (data, callback) => {
    pool.query(
      `Insert into registration (name, email, phoneNo, address, course) Values(?,?,?,?,?)`,
      [data.name, data.email, data.phoneNo, data.address, data.course],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
