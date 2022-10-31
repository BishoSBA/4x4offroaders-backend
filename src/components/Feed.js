// To Test

import Post from "./Post";

const Feed = async () => {
	// fetch the posts from the database
	const posts = await fetch("http://localhost:2121/api/feed")
		.then((response) => response.json())
		.then((data) => {
			// add the posts to an array
			const postsArray = data.posts.map((post) => {
				return <Post key={post._id} post={post}></Post>;
			});

			return postsArray;
		});

	console.log(posts);
	return posts;
};

export default Feed;
