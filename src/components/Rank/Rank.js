import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="tc white f3">{`Hi ${name}! Your current entry count is...`}</div>
      <div className="tc white f1">{entries}</div>
    </div>
  );
};

export default Rank;
