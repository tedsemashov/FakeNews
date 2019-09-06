import React, { Component } from 'react';

import AppMetaTags from '../appMetaTags';

import './manage.css';

class Manage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <AppMetaTags title="Manage" description='desctiption' />
        <h1>Manage</h1>
      </div>
    )
  }
}

export default Manage;
