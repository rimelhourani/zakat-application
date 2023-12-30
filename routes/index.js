var express = require("express");
const { Register, Login } = require("../controllers/users.controllers");
const {
  AddProfile,
  FindAllProfiles,
  FindSingleProfile,
  DeleteProfile,
} = require("../controllers/profile.controllers");
const passport = require("passport");
const { ROLES, inRole } = require("../security/Rolemiddlewares");
var router = express.Router();

/* GET home page. */
router.post("/register", Register);
router.post("/login", Login);
/*PROFILES */
router.post(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  AddProfile
);
router.get(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.ADMIN),
  FindAllProfiles
);
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),

  FindSingleProfile
);
router.delete(
  "/profiles/:id",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.ADMIN),
  DeleteProfile
);

module.exports = router;
