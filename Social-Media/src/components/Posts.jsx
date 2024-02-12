import React from "react";
import Card from "./Card";

function Posts() {
  return (
    <div className="flex h-fit flex-wrap justify-center items-center gap-2">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Posts;
