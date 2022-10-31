const Post = (post) => {
	console.log(post);
	return (
		<>
			<div className="card w-96 bg-base-100 shadow-xl m-4">
				<figure>
					<img src={post.image} alt="img" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						{post.title}
						<div className="badge badge-secondary">NEW</div>
					</h2>
					<div className="card-actions justify-end">
						{/* <div className="badge badge-outline">{post.tags.vehicle}</div>
						<div className="badge badge-outline">{post.tags.brands}</div>
						<div className="badge badge-outline">{post.tags.workshops}</div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Post;
