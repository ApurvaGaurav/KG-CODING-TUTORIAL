import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { PostList } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

function Posts() {
  const { postList } = useContext(PostList);

  return (
    <div className="flex flex-wrap w-full mt-1">
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
