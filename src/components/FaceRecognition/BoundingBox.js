import React from "react";

const BoundingBox = ({ item, id }) => {
  return (
    <div
      className="bounding-box pointer"
      style={{
        top: `${item.region_info.bounding_box.top_row * 100}% `,
        right: `${(1 - item.region_info.bounding_box.right_col) * 100}% `,
        bottom: ` ${(1 - item.region_info.bounding_box.bottom_row) * 100}%`,
        left: `${item.region_info.bounding_box.left_col * 100}% `,
      }}
    >
      <div className="bounding-box-concepts">
        <div
          className="concept bounding-box__concept"
          title="face (ai_8jtPl3Xj) : 0"
        >
          <span className="concept__name">{item.data.concepts[0].name}</span>
          <span className="concept__prediction-val">
            {item.data.concepts[0].name === "face"
              ? id + 1
              : (item.data.concepts[0].value * 100).toFixed(2) + "%"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BoundingBox;
