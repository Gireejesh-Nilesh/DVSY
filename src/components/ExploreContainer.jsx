import React from "react";

const ExploreContainer = (props) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="w-10 h-10 bg-gray-600 rounded-[50%] flex items-center justify-center text-xl">
        {props.icon}
      </div>
      <h6>{props.text}</h6>
    </div>
  );
};

export default ExploreContainer;
