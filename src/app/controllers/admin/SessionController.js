module.exports = {
  loginForm(req, res) {
    return res.render("session/login");
  },
  forgotForm(req, res) {
    return res.render("session/forgot-password");
  },
  resetForm(req, res) {
    return res.render("session/reset-password", { token: req.query.token });
  },
};
