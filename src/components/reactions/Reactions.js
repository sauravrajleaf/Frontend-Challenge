import React, { Fragment, useState } from "react";

import "./Reactions.css";

const Reactions = (props) => {
  const { click } = props;
  const [reactionsCount, setCount] = useState(0);

  const handleClickReactions = () => {
    if (click) {
      setCount(reactionsCount + 1);
      localStorage.setItem("Total Reactions", reactionsCount + 1);
    }
  };

  return (
    <Fragment>
      <div className="wrapper-2">
        <div className="icon-2 like">
          <div className="tooltip">Like</div>
          <span className="span-2" onClick={handleClickReactions}>
            <i class="far fa-thumbs-up"></i>
          </span>
        </div>
        <div className="icon-2 surprise">
          <div className="tooltip">Wow!</div>
          <span className="span-2" onClick={handleClickReactions}>
            <i class="far fa-surprise"></i>
          </span>
        </div>
        <div className="icon-2 smile">
          <div className="tooltip">Happy</div>
          <span className="span-2" onClick={handleClickReactions}>
            <i class="far fa-smile-beam"></i>
          </span>
        </div>
        <div className="icon-2 sad">
          <div className="tooltip">Sad</div>
          <span className="span-2" onClick={handleClickReactions}>
            <i class="far fa-sad-tear"></i>
          </span>
        </div>
      </div>

      {click && reactionsCount !== 0 && (
        <span>
          <strong>Reactions Count: </strong>
          {reactionsCount}
        </span>
      )}
    </Fragment>
  );
};

export default Reactions;
