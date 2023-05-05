import React from "react";
import Lottie from "lottie-react";
import arrowanimation from "./arrowanimation.json";

function ScrollDowmArrow() {
  return (
    <div className="scrolldownarrow">
      <Lottie animationData={arrowanimation} />
    </div>
  );
}

export default ScrollDowmArrow;
