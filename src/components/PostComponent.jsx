import React from "react";

const PostComponent = ({ api }) => {
  const { imgUrl, title, desc, likeCount, comments, shares, saves } = api;
  return (
    <div>
      <div className="bg-gray-300 w-[300px] mx-auto p-2 my-4">
        <div className="mb-4">
          <img src={imgUrl} alt="postImage" />
        </div>
        <div className="mb-2">{title}</div>
        <div className="mb-2 text-sm">{desc}</div>
        <div className="flex justify-between px-2 text-xs">
          <span className="flex space-x-3">
            <span>{likeCount}</span>
            <span>{comments}</span>
            <span>{shares}</span>
          </span>
          <span>{saves}</span>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;

/* 
Git contIainers vrsion control 
Github - histing service liike google drive
monday - store => id: 123 v1
tuesday - store => id: 354 v2 ~~~~~~~
wed - store => id: 542 v3 xxxxxxxxxx
*/
