import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";

const clientId = "968658749452-5n8j9kjdionsmfulgehjn9jcma2k5s8n.apps.googleusercontent.com";
const Router = BrowserRouter;
// id={useParams()}

function App() {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const getUser = async () => {
			fetch("http://localhost:2121/api/auth/login/success", {
				method: "GET",
				credentials: "include",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Credentials": true,
				},
			})
				.then((response) => {
					if (response.status === 200) return response.json();
					setProfile(null);
					throw new Error("Authentication has failed");
				})
				.then((resObject) => {
					setProfile(resObject.user);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getUser();
	}, []);

	const logOut = async () => {
		window.open("http://localhost:2121/api/auth/logout", "_self");
	};

	return (
		<>
			<Router>
				<Header logOut={logOut} user={profile} />
				<div className="flex flex-col bg-white min-h-screen">
					<Routes>
						<Route path="/feed" element={<Feed />} />
						<Route path="/login" element={<Login setProfile={setProfile} />} />
						<Route path="/" element={<Login setProfile={setProfile} />} />
						<Route path="/post" element={<Post />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</>
	);
}

export default App;
