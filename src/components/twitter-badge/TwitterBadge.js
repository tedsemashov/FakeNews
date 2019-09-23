import React from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./twitter-badge.css";

export function twitterLink({ nickname }) {
  return `https://twitter.com/${_.trimStart(nickname, "@")}`;
}

export default class TwitterBadge extends React.Component {
  renderChildren() {
    const { nickname, asIcon } = this.props;

    return asIcon ? <FontAwesomeIcon icon={faTwitter} /> : `@${_.trimStart(nickname, "@")}`;
  }

  render() {
    return(
      <a
        className="twitter-badge"
        href={twitterLink(this.props)}
        target="_blank"
        rel="nofollow noopener noreferrer"
        title="Open in Twitter"
        >
        {this.renderChildren()}
      </a>
    );
  }
}
