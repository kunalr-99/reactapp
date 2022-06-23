import React, { useState } from "react";

const Counter = () => {
  const [index, setIndex] = useState(0);
  const [postData, setPostData] = useState({
    author: "",
    imgUrl: "",
    caption: "",
  });
  console.log(postData);

  const formSubmit = () => {
    setPostData({
      author: "KunaL",
      imgUrl: "suhhw",
      caption: "loremc cjsdvnsuw",
    });
    // console.log(postData);
  };

  const buttonClick = () => {
    setIndex(index + 1);
  };
  console.log(index);
  return (
    <>
      <div className="px-2 py-1 mx-auto mt-20 text-center">
        <button className="border border-gray-300" onClick={buttonClick}>
          Increment
        </button>
        <div>{index}</div>
        <button className="border border-gray-300" onClick={formSubmit}>
          submit
        </button>
        <div>{postData.author}</div>
      </div>
    </>
  );
};

export default Counter;
