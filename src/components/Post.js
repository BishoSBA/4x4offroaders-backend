import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import Comment from "./Comment";

const Post = ({ profile }) => {
	const [post, setPost] = useState({});
	const [user, setUser] = useState({});
	const [comments, setComments] = useState([]);
	const postId = useParams().id;

	const navigate = useNavigate();

	useEffect(() => {
		if (!profile) return navigate("/login");

		// fetch the post from the database
		const getPost = async () => {
			fetch("http://localhost:2121/api/post/" + postId)
				.then((response) => response.json())
				.then((data) => {
					setPost(data.post);
					// setComments(data.comments);
				});
		};
		getPost();
	}, []);

	return (
		<div className="place-self-center p-12 w-4/5 min-w-24">
			<span>{post.user}</span>
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
