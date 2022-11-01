const Postcard = ({ post }) => {
	console.log(post);
	return (
		<>
			<div className="card w-96 bg-base-100 shadow-xl m-4">
				<figure>
					<img src={post.image} alt="img" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{post.title}</h2>
					<div className="card-actions justify-end mt-4">
						<div className="badge badge-primary">LC79</div>
						<div className="badge badge-secondary">Fox</div>
						<div className="badge badge-light">Saudi4x4Center</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Postcard;
