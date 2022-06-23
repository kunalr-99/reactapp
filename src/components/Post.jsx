import React, { useState } from "react";
// import { postdata } from "../api/apidata";
import PostComponent from "./PostComponent";

const Post = () => {
  const [postData, setPostData] = useState({
    imgUrl: "",
    title: "",
    desc: "",
    likeCount: 0,
    comments: 0,
    shares: 0,
    saves: 0,
  });

  // const data = [];
  const [data, setData] = useState([]);
  // const posts = []

  let key, val;
  const changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    key = name;
    val = value;
    setPostData({
      ...postData, //restoring prev data
      [key]: val, //updating particular field
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("clickes");
    setData((update) => [...update, postData]);
    setPostData({
      imgUrl: "",
      title: "",
      desc: "",
      likeCount: 0,
      comments: 0,
      shares: 0,
      saves: 0,
    });
  };
  return (
    <>
      <div>
        <form action="#" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="post title"
            name="title"
            value={postData.title}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="post desc"
            name="desc"
            value={postData.desc}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="post image"
            name="imgUrl"
            value={postData.imgUrl}
            onChange={changeHandler}
          />
          <input
            type="number"
            name="likeCount"
            value={postData.likeCount}
            onChange={changeHandler}
          />
          <input
            type="number"
            name="comments"
            value={postData.comments}
            onChange={changeHandler}
          />
          <input
            type="number"
            name="shares"
            value={postData.shares}
            onChange={changeHandler}
          />
          <input
            type="number"
            name="saves"
            value={postData.saves}
            onChange={changeHandler}
          />
          <input className="cursor-pointer" type="submit" value="Post" />
        </form>
      </div>
      {data.map((data, i) => {
        return (
          <div key={i}>
            <PostComponent api={data} />
          </div>
        );
      })}
    </>
  );
};

export default Post;
