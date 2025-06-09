import React from "react";

const CommonHeading = ({ HeadClass, HeadText }) => {
  return (
    <div>
      <p className={`text-[80px] leading-[104%] [text-shadow:2px_2px_4px_#00000040] ff-noto ${HeadClass}`}>
        {HeadText}
      </p>
    </div>
  );
};

export default CommonHeading;
