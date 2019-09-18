import React from "react";
import classNames from "classnames";

import "./spinner.css";

export default function Spinner(props) {
  const className = classNames("spinnerWrapper spinner-layout", props.size);
  return(
    <div className={className}>
      <img src={require('../../images/spiner.gif')} alt="spinner" />
    </div>
  );
};
