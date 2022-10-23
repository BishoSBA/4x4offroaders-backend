import Header from "./components/Header";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {
	createBrowserRouter,
	BrowserRouter,
	RouterProvider,
	Routes,
	Route,
	Link,
	useParams,
} from "react-router-dom";
import "./App.css";

// id={useParams()}
// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Feed />,
// 	},
// 	{
// 		path: "/post/:id",
// 		element: <Post />,
// 	},
// 	{
// 		path: "/login",
// 		element: <Login />,
// 	},
// 	{
// 		path: "/signup",
// 		element: <Signup />,
// 	},
// ]);

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="login" element={<Login />} />
					<Route path="/" element={<Feed />} />
					<Route index element={<Login />} />
					<Route path=":postId" element={<Post />} />
					<Route path="signup" element={<Signup />} />
					{/* <Route index element={<LeagueStandings />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
