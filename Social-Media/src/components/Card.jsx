import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { FaUserAlt } from "react-icons/fa";

function Card({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div
      className="card w-96  m-2"
      style={{ height: "fit", backgroundColor: "rgb(221, 221, 221)" }}
    >
      <button
        className="btn btn-danger w-fit self-end"
        onClick={() => {
          deletePost(post.id);
        }}
      >
        <MdDelete />
      </button>
      <div className="card-body ">
        <h6 className="flex items-center w-fit bg-green-400 p-1 rounded-lg gap-2">
          <span>
            <FaUserAlt />
          </span>
          <p className="mt-1 text-xl">{post.userId}</p>
        </h6>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {/*  */}
        {post.tags.map((tag) => (
          <span className="badge bg-primary mx-1" key={tag}>
            {tag}
          </span>
        ))}
        <div
          className="alert alert-info w-fit p-2 mx-1 mt-3 font-bold"
          role="alert"
        >
          {post.reactions}👍
        </div>
      </div>
    </div>
  );
}

export default Card;
