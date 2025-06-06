import React from "react";

const CommonHeading = ({ HeadClass, HeadText }) => {
  return (
    <div>
      <p className={`text-[80px] leading-[104%] ff-noto ${HeadClass}`}>
        {HeadText}
      </p>
    </div>
  );
};

export default CommonHeading;
