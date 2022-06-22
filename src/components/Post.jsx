import React from "react";
import { postdata } from "../api/apidata";
import PostComponent from "./PostComponent";

const Post = () => {
  return (
    <>
      {postdata.map((ApiData) => {
        return <PostComponent api={ApiData} />;
      })}
    </>
  );
};

export default Post;
