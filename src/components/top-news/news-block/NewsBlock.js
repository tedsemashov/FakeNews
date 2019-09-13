import React from "react";

import "./newsBlock.css";

export default class NewsBlock extends React.Component {
  render() {
    return (
      <div className='newsContainer'>
        {this.props.text}
      </div>
    );
  }
}
