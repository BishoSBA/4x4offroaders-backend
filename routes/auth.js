const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
// router.get("/", homeController.getIndex);
// router.get("/feed", ensureAuth, postsController.getFeed);
// router.get("/login", ensureGuest, authController.getLogin);
// router.get("/signup", ensureGuest, authController.getSignup);

router.post("/login", authController.postLogin); //Local Login Strategy
router.post("/signup", authController.postSignup); //Local Login Strategy Signup
router.get("/google/callback", authController.getLoginGoogleCallback);
router.get("/google", authController.getLoginGoogle);
router.get("/login/success", authController.getLoginGoogleSuccess);
router.get("/logout", authController.logout);

module.exports = router;