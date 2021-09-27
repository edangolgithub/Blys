import React from "react";

function Success() {
  const mystyle = {
    color: "green",
    fontSize: "30px",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <div>
      <h1 style={mystyle}> Your code have been successfully verified  </h1>
    </div>
  );
}

export default Success;
