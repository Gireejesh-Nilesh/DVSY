import React from "react";

const ImageCard = (props) => {
  return (
    <div className="flex items-center justify-center flex-1 rounded-xl overflow-hidden obejct-cover">
      <img src={props.src} alt="" />
    </div>
  );
};

export default ImageCard;
