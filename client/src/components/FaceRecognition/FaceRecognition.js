import React from "react";
import BoundingBox from "./BoundingBox";
import Detail from "./Detail";

const FaceRecognition = ({ imageURL, info }) => {
  const [box, type] = info;
  return (
    <div>
      <div className="z center ma">
        <div className="relative mt2">
          <img src={imageURL} alt="" width="500px" height="auto" />
          {box &&
            box.length > 0 &&
            box.map((item, ind) => {
              return <BoundingBox item={item} key={ind} id={ind} />;
            })}
        </div>
      </div>
      {box && box.length > 0 && <Detail info={box} type={type} />}
    </div>
  );
};

export default FaceRecognition;
