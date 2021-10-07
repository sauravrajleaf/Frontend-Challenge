import React from "react";

import "./Reactions.css";

const Reactions = () => {
  const handleClick = () => {
    return;
  };
  return (
    <div className="wrapper-2">
      <div className="icon-2 like" onClick={handleClick}>
        <div className="tooltip">Like</div>
        <span className="span-2">
          <i class="far fa-thumbs-up"></i>
        </span>
      </div>
      <div className="icon-2 surprise" onClick={handleClick}>
        <div className="tooltip">Wow!</div>
        <span className="span-2">
          <i class="far fa-surprise"></i>
        </span>
      </div>
      <div className="icon-2 smile" onClick={handleClick}>
        <div className="tooltip">Happy</div>
        <span className="span-2">
          <i class="far fa-smile-beam"></i>
        </span>
      </div>
      <div className="icon-2 sad" onClick={handleClick}>
        <div className="tooltip">Sad</div>
        <span className="span-2">
          <i class="far fa-sad-tear"></i>
        </span>
      </div>
    </div>
  );
};

export default Reactions;
