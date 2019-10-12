import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./fixed-keywords.scss"

export default class FixedKeywords extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    keywords: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(keyword) {
    this.props.onClick(keyword, this.props.timePeriod);
  }

  render() {
    const { keyword } = this.props;
    const links = this.props.keywords.map((k) => {
      const className = classNames("fixed-link", { active: k === keyword });
      const tag = `${k}`[0] === "#" ? k : `#${k}`;

      return(
        <button
          key={k}
          className={className}
          href="#"
          onClick={() => this.onClick(k)}
          >
          {tag}
        </button>
      );
    });

    return(<div className="fixed-keywords">{links}</div>);
  }
}
