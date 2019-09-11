import React from 'react';
import './search.css';

export const DEFAULT_KEYWORD = "ukraine";

export default class Search extends React.Component {
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
    const { title, className, placeholder, keyword } = this.props;
    return (
      <div className="searchInput">
        <p className="searchTitle">{title}</p>
        <div className="searchContainer">
          <div className="keyWord">
            <p className="keyWordValue">{keyword}</p>
            <img className="closeImg" src={require('../../../images/header/close@3x.png')} alt="Close"  onClick={this.onReset}/>
          </div>
          <input type="text" className={className} placeholder={placeholder} value={this.state.keyword} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
          <img className="closeImg" src={require('../../../images/header/search@3x.png')} alt="Search" onClick={this.onClick} />
        </div>
      </div>
    );
  }
};
