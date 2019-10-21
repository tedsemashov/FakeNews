import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTools} from "@fortawesome/free-solid-svg-icons";

import "./under-construction.scss";

export default class UnderConstruction extends React.Component {
  componentDidMount() {
    const root = document.querySelector("#root");

    if(!root) return;

    root.classList.add('under-construction-layout');
  }

  render() {
    return(
      <div className="under-construction">
        <div className="maintenance-content">
          <h2>
            <span className="main-icon"><FontAwesomeIcon icon={faTools} /></span>
            Page is under construction
          </h2>
        </div>
      </div>
    );
  }
}
