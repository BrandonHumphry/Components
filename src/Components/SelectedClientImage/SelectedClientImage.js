import React from "react";

const SelectedClientImage = props => {
  const { image, description } = props;
  return (
    <div className="selectedClientImage">
      <img src={image} alt="" />
      <div className="description">{description}</div>
    </div>
  );
};

export default SelectedClientImage;
