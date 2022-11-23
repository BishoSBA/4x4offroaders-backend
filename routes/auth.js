const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const passport = require("passport");

//Main Routes - simplified for now
// router.get("/", homeController.getIndex);
// router.get("/feed", ensureAuth, postsController.getFeed);
// router.get("/login", ensureGuest, authController.getLogin);
// router.get("/signup", ensureGuest, authController.getSignup);

router.post("/login", (req, res) => authController.postLogin(req, res)); //Local Login Strategy
router.post("/signup", (req, res) => authController.postSignup(req, res)); //Local Login Strategy Signup
router.get("/logout", authController.logout);
router.get("/login/failed", authController.getLoginFailed);
router.get("/login/success", authController.getLoginSuccess);

const CLIENT_URL = "http://localhost:3000";

//@desc Auth with Google
//@route GET /api/auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//@desc Google autho callback
//@route GET /api/auth/google/callback
router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: CLIENT_URL + "/",
		failureRedirect: "/api/auth/login/failed",
	})
);

module.exports = router;
