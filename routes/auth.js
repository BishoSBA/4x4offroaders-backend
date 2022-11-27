const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const passport = require("passport");
require("dotenv").config({ path: "./config/.env" });

router.post("/login", (req, res) => authController.postLogin(req, res)); //Local Login Strategy
router.post("/signup", (req, res) => authController.postSignup(req, res)); //Local Login Strategy Signup
router.get("/logout", authController.logout);
router.get("/login/failed", authController.getLoginFailed);
router.get("/login/success", authController.getLoginSuccess);

//@desc Auth with Google
//@route GET /api/auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//@desc Google autho callback
//@route GET /api/auth/google/callback
router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/api/auth/login/failed",
	})
);

module.exports = router;
