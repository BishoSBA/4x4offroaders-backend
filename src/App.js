import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";

const Router = BrowserRouter;
// id={useParams()}

function App() {
  const { authenticated, setAuthenticated } = useState(false);
  // const { error, setError } = useState(null);
  // const { user, setUser } = useState({});

  // useEffect(() => {
  // 	fetch("/auth/login/success", {
  // 		method: "GET",
  // 		credentials: "include",
  // 		headers: {
  // 			Accept: "application/json",
  // 			"Content-Type": "application/json",
  // 			"Access-Control-Allow-Credentials": true,
  // 		},
  // 	})
  // 		.then((response) => {
  // 			if (response.status === 200) return response.json();
  // 			throw new Error("failed to authenticate user");
  // 		})
  // 		.then((responseJson) => {
  // 			setAuthenticated(true);
  // 			setUser(responseJson.user);
  // 			// this.setState({
  // 			// 	authenticated: true,
  // 			// 	user: responseJson.user,
  // 			// });
  // 		})
  // 		.catch((error) => {
  // 			setAuthenticated(false);
  // 			setError("Failed to authenticate user");
  // 			// this.setState({
  // 			// 	authenticated: false,
  // 			// 	error: "Failed to authenticate user",
  // 			// });
  // 		});
  // });
  return (
    <>
      <Router>
        <Header authenticated={authenticated} />
        <div className="flex flex-col bg-white">
          <Routes>
            <Route path="/feed" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
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
