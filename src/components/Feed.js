// To Test

import Post from "./Post";

const Feed = async () => {
	// fetch the posts from the database
	const res = await fetch("/feed", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	console.log(res.posts);
	const postsArray = [];

	// add the posts to an array

	// for (let post in posts) {
	// 	postsArray.push(<Post post={post}></Post>);
	// }

	// return <>{postsArray}</>;
};

export default Feed;
