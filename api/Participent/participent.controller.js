const { registerParticipent } = require("./participent.service");

module.exports = {
  Register: (req, res) => {
    const body = req.body;
    registerParticipent(body, (error, results) => {
      if (error) {
        console.log(error);
      }
      if (!results) {
        return res.status(500).json({
          success: 0,
          message: "Registration Failed",
        });
      } else {
        return res.status(200).json({
          success: 1,
          message: "successfully register....!!!!",
          data: results,
        });
      }
    });
  },
};
