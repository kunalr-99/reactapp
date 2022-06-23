import React from "react";
import { quesdata } from "../api/quesdata";

const Header1 = ({ head }) => {
  return (
    <>
      {quesdata.map((sameep) => {
        const { id, question, opt1, opt2 } = sameep;
        return (
          <div key={id}>
            <div className="text-red-500">{id}</div>
            <div className="text-red-500">{question}</div>
            <div className="text-red-500">{opt1}</div>
            <div className="text-red-500">{opt2}</div>
          </div>
        );
      })}
    </>
  );
};

export default Header1;
