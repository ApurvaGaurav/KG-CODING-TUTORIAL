import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const reactionElement = useRef();
  const hashtagElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    const postReactions = reactionElement.current.value;
    const hashTags = hashtagElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postContentElement.current.value = "";
    reactionElement.current.value = "";
    hashtagElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postContent,
        reactions: postReactions,
        userId: userId,
        tags: hashTags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
    navigate("/");
  };
  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter your user ID:
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Post Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          ref={postTitleElement}
        />
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
          ref={postContentElement}
        ></textarea>
        <label htmlFor="floatingTextarea2">Content</label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          No of Reactions:
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          ref={reactionElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Enter your hashtags here:
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          ref={hashtagElement}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default Form;
