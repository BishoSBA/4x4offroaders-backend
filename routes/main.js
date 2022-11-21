const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

//Main Routes - simplified for now
// router.get("/", homeController.getIndex);
// router.get("/login", ensureGuest, authController.getLogin);
router.get("/profile", postsController.getProfile);
router.get("/feed", postsController.getFeed);

module.exports = router;
