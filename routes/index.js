const passport = require("passport");

const router = require("express").Router();

router.use("/", require("./swagger"));

//router.get("/", (req, res) => {
  //#swagger.tags = ["Hello World"]
  //res.send("Hello World");
//});

router.use("/sales", require("./sales"));
router.use("/clients", require("./clients"));

router.get("/login", passport.authenticate("github"), (req, res) => {
  // This route initiates the GitHub authentication process
});

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
