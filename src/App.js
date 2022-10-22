import logo from "./logo.svg";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider, Route, Link, useParams } from "react-router-dom";
import "./App.css";

// id={useParams()}
const router = createBrowserRouter([
	{
		path: "/",
		element: <Feed />,
	},
	{
		path: "/post/:id",
		element: <Post />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
]);

function App() {
	return (
		<>
			<Header />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
