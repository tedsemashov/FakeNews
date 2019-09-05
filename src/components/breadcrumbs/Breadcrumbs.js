import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import './breadcrumbs.css';

export const DEFAULT_HOME = { title: "Home", link: "/analytics" };

const renderBreadcrumb = (breadcrumb, i) => {
  const { title, link, active } = breadcrumb;
  const key = `${i}-${title}`;

  if(active) {
    return(<span key={key} className="breadcrumb-item">{title}</span>);
  }

  return(<Link to={link} key={key} className="breadcrumb-item">{title}</Link>);
};

export default function Breadcrumbs(props) {
  const { breadcrumbs }=props;

  return(
    <div className='breadcrumbs'>
      {renderBreadcrumb(DEFAULT_HOME)}
      {_.map(breadcrumbs, renderBreadcrumb)}
    </div>
  );
}
