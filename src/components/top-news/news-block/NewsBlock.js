import React from "react";
import Linkify from "react-linkify";

import "./newsBlock.css";

export default class NewsBlock extends React.Component {
  render() {
    return(
      <div className='newsContainer'>
        <Linkify>
          {this.props.text}
        </Linkify>
      </div>
    );
  }
}
