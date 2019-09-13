import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Header from '../header/index';
import Footer from '../footer/Footer';
import Subheader from '../subheader/index';
import Breadcrumbs from '../breadcrumbs';
import TopNews from './topNews';
import TopRetweetedNews from './topRetweetedNews';
import { setDocumentTitle } from '../meta';

import TopUserTweets from "./../top-user-tweets";
import TopMentionedUsersReTweets from "./../top-mentioned-users-re-tweets";
import Manipulators from "./../manipulators";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './expert.css';

export default class Expert extends React.Component {
  breadcrumbs = [
    { title: "Expert", link: "/expert", active: true }
  ];

  spinner = (
    <div className="spinnerWrapper">
      <Spinner animation="border" role="status" variant="dark" />
    </div>
  );

  componentDidMount() {
    const { dates, keyword } = this.props;

    this.props.getExpertsData(dates, keyword);
  }


  onTimePeriodSelect(arg) {
    // TBD; sync w/ date range filter;
    console.log(arg);
  }

  render() {
    const { isLoaded } = this.props;

    return (
      <div className="expert-page">
        {setDocumentTitle("Expert")}
        {!isLoaded && this.spinner}

        <Header />

        <Subheader onFilterChange={this.props.onFilterChange}/>

        <div className="default-container">
          <Container>
            <Breadcrumbs breadcrumbs={this.breadcrumbs} />
            <h1 className="main-title">Mark the fake</h1>
            <div className="main-title-line"/>
            <TopNews/>
            <TopRetweetedNews/>
            <TopUserTweets />
            <TopMentionedUsersReTweets />
            <Manipulators />
            <div className="train-model">
              <Button className="outline-black">Train model</Button>
            </div>
          </Container>
        </div>
        <div className="footerWrapper">
          <Footer />
        </div>
      </div>
    );
  }
}
