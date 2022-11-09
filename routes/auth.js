const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const passport = require("passport");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
// router.get("/", homeController.getIndex);
// router.get("/feed", ensureAuth, postsController.getFeed);
// router.get("/login", ensureGuest, authController.getLogin);
// router.get("/signup", ensureGuest, authController.getSignup);

router.post("/login", authController.postLogin); //Local Login Strategy
router.post("/signup", authController.postSignup); //Local Login Strategy Signup
router.get("/logout", authController.logout);
router.get("/login/failed", authController.getGoogleFailed);
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
		successRedirect: CLIENT_URL + "/feed",
		failureRedirect: "/api/auth/login/failed",
	})
);

module.exports = router;
