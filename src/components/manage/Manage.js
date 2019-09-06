import React, { Component } from 'react';

import { setDocumentTitle } from '../meta';

import './manage.css';

class Manage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        {setDocumentTitle("Manage")}
        <h1>Manage</h1>
      </div>
    )
  }
}

export default Manage;
