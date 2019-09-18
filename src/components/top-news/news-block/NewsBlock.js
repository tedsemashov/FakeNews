import React from "react";

import { convertLinks } from "./../../../utils/convertLinks";

import "./newsBlock.css";

export default class NewsBlock extends React.Component {
  render() {
    return(<div className='newsContainer'>{convertLinks(this.props.text)}</div>);
  }
}
