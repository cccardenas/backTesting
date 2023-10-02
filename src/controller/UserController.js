const UserService = require("../services/UserService");

function login(req, res) {
  const { username, password } = req.query;
  UserService.login(username, password)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: "Internal server error" });
    });
}

function register(req, res) {
  let fullName= req.body.fn;
  let username=req.body.un;
  let email=req.body.email;
  let password=req.body.password;
  UserService.register(fullName, username, email, password)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: "Internal server error" });
    });
}

module.exports = { login, register };

