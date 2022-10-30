const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
// router.get("/", homeController.getIndex);
// router.get("/login", ensureGuest, authController.getLogin);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);

module.exports = router;
