import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Header from "../header/index";
import Footer from "../footer/Footer";
import Subheader from "../subheader/index";
import Breadcrumbs from "../breadcrumbs";
import FlashMessage from "./../flashMessage";
import TopNews from "./topNews";
import TopRetweetedNews from "./topRetweetedNews";
import { setDocumentTitle } from "../meta";
import TopUserTweets from "./../top-user-tweets";
import TopMentionedUsersReTweets from "./../top-mentioned-users-re-tweets";
import Manipulators from "./../manipulators";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './expert.css';

export default class Expert extends React.Component {
  constructor(props) {
    super(props);

    this.onTrainModelButtonClick = this.onTrainModelButtonClick.bind(this);
    this.renderTrainButton = this.renderTrainButton.bind(this);
  }

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

  onTrainModelButtonClick() {
    const { dates, trainModel } = this.props;

    trainModel(dates);
  }

  renderTrainButton() {
    const { needTrainModel } = this.props;

    if(!needTrainModel) return null;

    return (
      <div className="train-model">
        <Button className="outline-black" onClick={this.onTrainModelButtonClick}>
          Train model
        </Button>
      </div>
    )
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
            {this.renderTrainButton()}
          </Container>
        </div>
        <div className="footerWrapper">
          <Footer />
        </div>
        <FlashMessage/>
      </div>
    );
  }
}
