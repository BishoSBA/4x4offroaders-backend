import { Link } from "react-router-dom";

const Postcard = ({ post }) => {
  return (
    <Link to="/post">
      <div className="card w-96 bg-base-100 shadow-2xl m-4 hover:scale-105 duration-500">
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
    </Link>
  );
};

export default Postcard;
