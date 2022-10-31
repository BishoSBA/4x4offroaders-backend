const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const CLIENT_HOME_PAGE_URL = "/signup";

exports.getGoogle = (req, res) => {
	passport.authenticate("google", { scope: ["profile", "email"] });
	console.log(res);
};

exports.getGoogleCallback = (req, res, next) => {
	// eslint-disable-next-line no-unused-expressions
	passport.authenticate("google", {
		failureRedirect: "/auth/login/failed",
	}),
		(req, res) => {
			res.json({
				success: true,
				message: "user has successfully authenticated",
				user: req.user,
				// cookies: req.cookies
			});
		};
};

exports.getGoogleSuccess = (req, res) => {
	if (req.user) {
		res.json({
			message: "User Authenticated",
			user: req.user,
		});
	}
};

// when login failed, send failed msg
exports.getGoogleFailed = (req, res) => {
	res.status(401).json({
		success: false,
		message: "user failed to authenticate.",
	});
};

exports.getLogin = (req, res) => {
	if (req.user) {
		return res.redirect("/profile");
	}
	res.render("login", {
		title: "Login",
	});
};

exports.postLogin = (req, res) => {
	const validationErrors = [];
	if (!validator.isEmail(req.body.email))
		validationErrors.push({ msg: "Please enter a valid email address." });
	if (validator.isEmpty(req.body.password))
		validationErrors.push({ msg: "Password cannot be blank." });

	if (validationErrors.length) {
		req.flash("errors", validationErrors);
		return false;
		//return res.redirect("/login")
	}
	req.body.email = validator.normalizeEmail(req.body.email, {
		gmail_remove_dots: false,
	});

	passport.authenticate("local", (err, user, info) => {
		if (err) {
			return err;
			// return next(err);
		}
		if (!user) {
			req.flash("errors", info);
			console.log("No user in log");
			res.json({ User: null });
			return;
			// return res.redirect("/login");
		}
		req.logIn(user, (err) => {
			if (err) {
				res.json({ User: null, Error: err });
				// return next(err );
			}
			req.flash("success", { msg: "Success! You are logged in." });
			console.log({ user });
			res.json({ User: user });
			return;
			// res.redirect(req.session.returnTo || "/profile");
		});
	})(req, res);
};

exports.logout = (req, res) => {
	req.logout(() => {
		console.log("User has logged out.");
	});
	req.session.destroy((err) => {
		if (err) console.log("Error : Failed to destroy the session during logout.", err);
		req.user = null;
		res.redirect("/");
	});
	res.redirect(CLIENT_HOME_PAGE_URL);
};

exports.getSignup = (req, res) => {
	if (req.user) {
		return res.redirect("/profile");
	}
	res.render("signup", {
		title: "Create Account",
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
