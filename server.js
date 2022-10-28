const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const authRoutes = require("./routes/auth");
// const mainRoutes = require("./routes/main");
// const postRoutes = require("./routes/posts");
// const commentRoutes = require("./routes/comments");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Solving cross-origin access issues
app.use(
	cors({
		origin: "http://localhost:3000", // allow to server to accept request from different origin
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		credentials: true, // allow session cookie from browser to pass through
	})
);

//Using EJS for views
// app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
	})
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Check authentication
const authCheck = (req, res, next) => {
	next();
};

//Setup Routes For Which The Server Is Listening
app.get("/", authCheck, (req, res) => {
	res.status(200);
});

app.use("/auth", authRoutes);
// app.use("/post", postRoutes);
// app.use("/comments", commentRoutes);

//Server Running
app.listen(process.env.PORT, () => {
	console.log(`Server is running on PORT ${process.env.PORT}, you better catch it!`);
});
