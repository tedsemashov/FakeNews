import React from "react";
import _ from "lodash";

import { convertLinks } from "./../../../utils/convertLinks";

export default class NewsBlock extends React.Component {
  render() {
    return(
      <div className='newsContainer'>
        <div className="news-data">
          <span>{this.props.date}</span>
          &nbsp;&middot;&nbsp;
          <span>News count {this.props.count}</span>
          &nbsp;&middot;&nbsp;
          <span>{_.round(_.get(this.props, "fakePersent", 0)*100, 2)}% fake </span>
        </div>
        {convertLinks(this.props.text)}
      </div>
    );
  }
}
