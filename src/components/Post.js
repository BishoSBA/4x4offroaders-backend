import PostCard from "./PostCard";
import Comment from "./Comment";

const Post = ({ post }) => {
	return (
		<div className="flex justify-center max-w-lg rounded-lg">
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
