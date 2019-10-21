import React from "react";

import { setDocumentTitle } from "../meta";

import Spinner from "../spinner/Spinner";
import Header from "../header";
import Subheader from "../subheader";
import UnderConstruction from "../under-construction/UnderConstruction";
import Footer from "../footer/Footer";

import './manage.scss';

export default class Manage extends React.Component {
  componentDidMount() {
    this.props.onFetchData();
  }

  render() {
    const { loading } = this.props;

    return(
      <React.Fragment>
        {setDocumentTitle("Manage")}
        {loading && <Spinner/>}

        <Header location={this.props.location} />

        <Subheader onFilterChange={this.props.onFilterChange} />

        <UnderConstruction />

        <div className="footerWrapper">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
