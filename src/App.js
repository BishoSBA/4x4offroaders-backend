import Header from "./components/Header";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";

const Router = BrowserRouter;
// id={useParams()}

function App() {
	return (
		<>
			<Header />
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Login />} />
					<Route path=":postId" element={<Post />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
