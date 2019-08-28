import React from 'react';
import './search.css';

const Search = ({ title, className, placeholder }) => {
  return (
    <div className="searchInput">
      <p className="searchTitle">{title}</p>
      <div className="searchContainer">
        <div className="keyWord">
          <p className="keyWordValue">Ukraine</p>
          <img className="closeImg" src={require('../../../images/header/close@3x.png')} />
        </div>
        <input type="text" className={className} placeholder={placeholder} />
        <img className="closeImg" src={require('../../../images/header/search@3x.png')} />
      </div>
    </div>
  );
};

export default Search;
