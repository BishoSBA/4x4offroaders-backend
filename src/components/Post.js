import PostCard from "./PostCard";
import Comment from "./Comment";

const Post = () => {
	const post = {
		caption: "a",
		cloudinaryId: "ecuf6t757sa5hgo6bxqj",
		createdAt: "2022-09-16T01:33:06.284Z",
		image: "https://res.cloudinary.com/bishosba/image/upload/v1663291983/ecuf6t757sa5hgo6bxqj.jpg",
		likes: 2,
		title: "a",
		user: "632102170d25b0332c976a95",
		__v: 0,
		_id: "6323d2528131df3f78f8f4a8",
	};

	return (
		<div className="place-self-center p-12">
			<figure>
				<img src={post.image} alt="img" />
			</figure>
			<span>Likes: Plug Likes</span>
			<span>Comments: Plug Comments</span>
			<ul>
				<li>Vehicle: LC79</li>
				<li>Brands: LC79</li>
				<li>Workshops: LC79</li>
			</ul>
			<div>Plug comments</div>
		</div>
	);
};

export default Post;
