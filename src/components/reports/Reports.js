import React from "react";

import { setDocumentTitle } from "../meta";

import UnderConstruction from "./../under-construction/UnderConstruction";
import Header from "../header";
import Subheader from "../subheader";

import "./reports.scss";
import Spinner from "../spinner/Spinner";
import Footer from "../footer/Footer";

export default class Reports extends React.Component {
  componentDidMount() {
    this.props.onFetchData();
  }

  render() {
    const { loading } = this.props;

    return(
      <React.Fragment>
        {setDocumentTitle("Reports")}
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
