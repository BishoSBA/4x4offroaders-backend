import { Link } from "react-router-dom";

const Feed = () => {
	return (
		<div>
			<ul>
				<li>
					{" "}
					<Link to="login">Login </Link>
				</li>
				<li>
					{" "}
					<Link to="signup">Signup</Link>
				</li>
			</ul>
		</div>
	);
};

export default Feed;
