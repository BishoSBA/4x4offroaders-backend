import { Link } from "react-router-dom";

const Header = ({ user }) => {
	const userImage = user != null ? user.image : "https://placeimg.com/80/80/people";
	return (
		<div className="sticky top-0 navbar bg-gray-900 z-10">
			<div className="flex-1">
				<Link to="/feed" className="btn btn-ghost normal-case text-xl">
					4x4Offroaders
				</Link>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src={userImage} />
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>Profile</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
