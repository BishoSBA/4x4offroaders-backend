// To Test

import PostCard from "./PostCard";

const Feed = () => {
	// fetch the posts from the database
	// const posts = await fetch("http://localhost:2121/api/feed")
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		// add the posts to an array
	// 		const postsArray = data.posts.map((post) => {
	// 			return <Post key={post._id} post={post}></Post>;
	// 		});

	// 		return postsArray;
	// 	});

	const posts = [
		{
			caption: "I think this is working right?",
			cloudinaryId: "eqetdrlfhvczc8qqxtxb",
			createdAt: "2022-10-14T14:18:34.450Z",
			image: "https://res.cloudinary.com/bishosba/image/upload/v1665757114/eqetdrlfhvczc8qqxtxb.png",
			likes: 0,
			title: "Numero Duo Test",
			user: "62f6b75a75ee0270144f8061",
			__v: 0,
			_id: "test63496fba69a63b3ef076ce51",
		},
		{
			caption: "I think this is working right?",
			cloudinaryId: "eqetdrlfhvczc8qqxtxb",
			createdAt: "2022-10-14T14:18:34.450Z",
			image: "https://res.cloudinary.com/bishosba/image/upload/v1665757114/eqetdrlfhvczc8qqxtxb.png",
			likes: 0,
			title: "Numero Duo Test",
			user: "62f6b75a75ee0270144f8061",
			__v: 0,
			_id: "63496fba69a63b3ef076ce51",
		},
		{
			caption: "a",
			cloudinaryId: "ecuf6t757sa5hgo6bxqj",
			createdAt: "2022-09-16T01:33:06.284Z",
			image: "https://res.cloudinary.com/bishosba/image/upload/v1663291983/ecuf6t757sa5hgo6bxqj.jpg",
			likes: 2,
			title: "a",
			user: "632102170d25b0332c976a95",
			__v: 0,
			_id: "6323d2528131df3f78f8f4a8",
		},
	];

	const postsArray = posts.map((post) => {
		return <PostCard key={post._id} post={post}></PostCard>;
	});

	return (
		<>
			<div className="flex flex-wrap gap-4 p-6 rounded-lg shadow-lg bg-white justify-center">
				{postsArray}
			</div>
		</>
	);
};

export default Feed;
