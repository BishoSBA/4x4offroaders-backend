import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";

const clientId = "968658749452-5n8j9kjdionsmfulgehjn9jcma2k5s8n.apps.googleusercontent.com";
const Router = BrowserRouter;
// id={useParams()}

function App() {
	const { authenticated, setAuthenticated } = useState(false);
	const [profile, setProfile] = useState([]);

	const onSuccess = (res) => {
		setProfile(res.profileObj);
	};

	const onFailure = (err) => {
		console.log("failed", err);
	};

	const logOut = () => {
		setProfile(null);
	};

	return (
		<>
			<GoogleOAuthProvider clientId={clientId}>
				<Router>
					<Header authenticated={authenticated} logOut={logOut} />
					<div className="flex flex-col bg-white min-h-screen">
						<Routes>
							<Route path="/feed" element={<Feed />} />
							<Route
								path="/login"
								element={<Login onFailure={onFailure} onSuccess={onSuccess} />}
							/>
							<Route path="/" element={<Login />} />
							<Route path="/post" element={<Post />} />
							<Route
								path="/signup"
								element={<Signup onFailure={onFailure} onSuccess={onSuccess} />}
							/>
						</Routes>
					</div>
					<Footer />
				</Router>
			</GoogleOAuthProvider>
		</>
	);
}

export default App;
