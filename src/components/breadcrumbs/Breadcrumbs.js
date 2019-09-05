import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import './breadcrumbs.css';

export default function Breadcrumbs(props) {
  const {breadcrumbs, active}=props;

  breadcrumbs.unshift({title: 'Home', link: '/analytics'});

  const breadcrumbsList = _.map(breadcrumbs, (breadcrumb)=> {
    const { link, title} = breadcrumb;

    if (link == active) {
      return <span key={title} className='breadcrumb-item'>{title}</span>
    }

    if (link && title) {
      return <Link to={link} key={title} className='breadcrumb-item'>{title}</Link>;
    }

    return null;
  })

  return(
    <div className='breadcrumbs'>
     {breadcrumbsList}
    </div>

  );
}
