import React from "react";
import _ from "lodash";
import classNames from "classnames";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import "./search.css";
import CloseImage from "../../../images/header/close@3x.png";

export const DEFAULT_KEYWORD = "ukraine";

export default class Search extends React.Component {
  isDefaultKeyword = (keyword) => `${keyword}`.toLowerCase() === DEFAULT_KEYWORD;

  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  keywords() {
    const search = this.isDefaultKeyword(this.props.keyword) ? [] : [this.props.keyword];

    // default goes first;
    return _.union([DEFAULT_KEYWORD], search);
  }

  onChange(e) {
    this.setState({keyword: e.target.value});
  }

  onKeyPress(e) {
    if(e.which === 13) {
      this.onClick();
    }
  }

  onClick() {
    this.setState({keyword: ""});
    this.props.onChange(this.state.keyword || DEFAULT_KEYWORD);
  }

  onReset() {
    this.setState({keyword: ""});
    this.props.onChange(DEFAULT_KEYWORD);
  }

  render() {
    const { title, className, placeholder } = this.props;
    const keywords = this.keywords().map((keyword, index) => {
      const tooltip = <Tooltip id={`tooltip-keyword-${index}`}>{keyword}</Tooltip>;
      const isDefault = this.isDefaultKeyword(keyword);
      const className = classNames("keyWord", { isDefault });

      return(
        <div className={className} key={index}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <p className="keyWordValue">{keyword}</p>
          </OverlayTrigger>
          <img className="closeImg" src={CloseImage} alt="Close"  onClick={this.onReset}/>
        </div>
      );
    });

    return (
      <div className="searchInput">
        <p className="searchTitle">{title}</p>
        <div className="searchContainer">
          {keywords}
          <input type="text" className={className} placeholder={placeholder} value={this.state.keyword} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
          <img className="closeImg" src={require('../../../images/header/search@3x.png')} alt="Search" onClick={this.onClick} />
        </div>
      </div>
    );
  }
};
