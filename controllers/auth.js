const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const CLIENT_URL = "http://localhost:3000";

// When login succeeds
exports.getLoginSuccess = (req, res) => {
	if (req.user) {
		res.status(200).json({
			success: true,
			message: "User Authenticated",
			user: req.user,
			// cookies: req.cookies
		});
	}
};

// when login failed, send failed msg
exports.getLoginFailed = (req, res) => {
	res.status(401).json({
		success: false,
		message: "user failed to authenticate",
	});
};

// Regular Login
exports.postLogin = (req, res) => {
	const validationErrors = [];
	if (!validator.isEmail(req.body.email))
		validationErrors.push({ msg: "Please enter a valid email address." });
	if (validator.isEmpty(req.body.password))
		validationErrors.push({ msg: "Password cannot be blank." });

	if (validationErrors.length) {
		req.flash("errors", validationErrors);
		return res.redirect(CLIENT_URL);
	}
	req.body.email = validator.normalizeEmail(req.body.email, {
		gmail_remove_dots: false,
	});

	passport.authenticate("local", (err, user, info) => {
		if (err) {
			console.error(err);
			return res.redirect(CLIENT_URL);
		}
		if (!user) {
			req.flash("errors", info);
			console.log("No user in log");
			res.status(401).json({
				success: false,
				message: "User Not Authenticated",
				user: null,
				// cookies: req.cookies
			});

			return res.redirect(CLIENT_URL);
		}
		req.logIn(user, (err) => {
			if (err) {
				res.json({ user: null, Error: err });
			}
			req.flash("success", { msg: "Success! You are logged in." });
			res.status(200).json({
				success: true,
				message: "User Authenticated",
				user: req.user,
				// cookies: req.cookies
			});
			return;
		});
	})(req, res);
};

exports.logout = (req, res) => {
	req.logout(() => {
		console.log("User has logged out.");
		res.status(200).json({
			success: true,
			message: "User logged out",
			user: null,
		});
	});
	req.session.destroy((err) => {
		res.status(401);
		if (err) console.log("Error : Failed to destroy the session during logout.", err);
	});
};

exports.postSignup = (req, res, next) => {
	const validationErrors = [];
	if (!validator.isEmail(req.body.email))
		validationErrors.push({ msg: "Please enter a valid email address." });
	if (!validator.isLength(req.body.password, { min: 8 }))
		validationErrors.push({
			msg: "Password must be at least 8 characters long",
		});
	if (req.body.password !== req.body.confirmPassword)
		validationErrors.push({ msg: "Passwords do not match" });

	if (validationErrors.length) {
		req.flash("errors", validationErrors);
		return res.redirect("../signup");
	}
	req.body.email = validator.normalizeEmail(req.body.email, {
		gmail_remove_dots: false,
	});

	const user = new User({
		userName: req.body.userName,
		email: req.body.email,
		password: req.body.password,
	});

	User.findOne(
		{ $or: [{ email: req.body.email }, { userName: req.body.userName }] },
		(err, existingUser) => {
			if (err) {
				return next(err);
			}
			if (existingUser) {
				req.flash("errors", {
					msg: "Account with that email address or username already exists.",
				});
				return res.redirect("../signup");
			}
			user.save((err) => {
				if (err) {
					return next(err);
				}
				req.logIn(user, (err) => {
					if (err) {
						return next(err);
					}
					res.redirect("/profile");
				});
			});
		}
	);
};
