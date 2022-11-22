import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostCard from "./PostCard";

const Profile = ({ profile }) => {
	// const [post, setPost] = useState([]);
	const [user, setUser] = useState("");

	const navigate = useNavigate();

	let postsArray = [];
	useEffect(() => {
		if (!profile) return navigate("/login");

		let posts = [];

		// fetch the post from the database
		const getProfile = async () => {
			fetch("http://localhost:2121/api/profile")
				.then((response) => response.json())
				.then((data) => {
					setUser(data.user);
					posts = data.posts;
					// setComments(data.comments);
				});
		};
		getProfile();

		postsArray = posts.map((post) => {
			return <PostCard key={post._id} post={post}></PostCard>;
		});
	});

	// <% for(var i=0; i<posts.length; i++) {%>
	//   <li className="col-6 justify-content-between mt-5">
	//     <a href="/post/<%= posts[i]._id%>">
	//       <img className="img-fluid" src="<%= posts[i].image%>">
	//     </a>
	//   </li>
	// <% } %>

	return (
		<div className="container flex">
			<div className="row mt-5 p-12">
				<div className="col-6">
					<div>
						<p>
							<strong>User Name</strong>: {user.username}
						</p>
						<p>
							<strong>Email</strong>: {user.email || "No Email"}
						</p>
					</div>
					<div className="mt-12">
						<h2 className="text-gray-900">Add a post</h2>
						<form
							action="http://localhost:2121/api/post/createPost"
							encType="multipart/form-data"
							method="POST"
						>
							<div className="mb-3">
								<label htmlFor="title" className="form-label">
									Title
								</label>
								<input
									type="text"
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none focus:shadow-outline"
									id="title"
									name="title"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="caption" className="form-label">
									Caption
								</label>
								<textarea
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
									id="caption"
									name="caption"
								></textarea>
							</div>
							<div className="mb-3">
								<label htmlFor="imgUpload" className="form-label">
									Image
								</label>
								<input
									type="file"
									className="form-control"
									id="imageUpload"
									name="file"
								/>
							</div>
							<button
								type="submit"
								className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
								value="Upload"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
				<div className="col-6">
					<ul className="row list-unstyled">{postsArray}</ul>
					<div className="row justify-content-center mt-5">
						<a className="btn btn-primary" href="/">
							Return to Feed
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
