import Post from "./Post";
import { Link } from "react-router-dom";

const Feed = async () => {
	// fetch the posts from the database
	const res = await fetch("/feed/posts", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = res.json();

	// add the posts to an array
	const posts = [];
	for (let post in data) {
		posts.push(<Post post={post}></Post>);
	}

	return <>{...posts}</>;
};

export default Feed;
