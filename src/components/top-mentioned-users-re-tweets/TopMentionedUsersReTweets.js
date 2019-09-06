import React from "react";
import _ from "lodash";
import classNames from "classnames";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import SectionTitle from "../section-title/SectionTitle";
import { userAvatar } from "../../utils/avatar";
import Spinner from "react-bootstrap/Spinner";

import "./top-mentioned-users-re-tweets.css";
import checkIcon from "./../../images/tip_icon.svg";

export default class TopMentionedUsersReTweets extends React.Component {
  spinner = (
    <div className="spinner-layout">
      <Spinner animation="border" role="status" variant="dark" />
    </div>
  );
  renderTweets = (tweet, index) => {
    return(
      <div className="tweet" key={index}>
        {tweet}
      </div>
    );
  };

  constructor(props) {
    super(props);

    this.state = { user: null };

    this.onMarkFake = this.onMarkFake.bind(this);

    this.renderUser = this.renderUser.bind(this);
    this.renderTweets = this.renderTweets.bind(this);
  }

  onMarkFake(user) {
    console.log("onMarkFake", user);
  }

  renderButton(user) {
    const { fn_users } = this.props;
    const isFake = _.includes(fn_users, user);
    const buttonClass = classNames("mark-fake", { isFake });
    const onClick = () => {
      if(isFake) {
        this.props.unmarkFake(user);
      } else {
        this.props.markFake(user);
      }
    };

    return(
      <Button className={buttonClass} onClick={onClick}>
        {isFake && <img className="check-icon" src={checkIcon} alt="" />}
        Fake
      </Button>
    );
  }

  renderUser(userData, user) {
    const isProcessing = _.includes(this.props.processing, user);
    const onSelect = () => this.setState({ user });

    return(
      <Row className="m-0 user-row" key={`${user}-${isProcessing}`} >
        {isProcessing && this.spinner}

        <Col className="pl-0 user-selection" sm={9} onClick={onSelect}>
          <Row>
            <Col className="" sm={3}>{userAvatar({...userData, nickname: user})}</Col>
            <Col className="user-details" sm={6}>
              <h5 className="user-name"> </h5>
              <span className="user-nickname">@{user}</span>
            </Col>
          </Row>
        </Col>
        <Col className="text-right pr-0" sm={3}>{this.renderButton(user)}</Col>
      </Row>
    );
  }

  render() {
    const { users } = this.props;
    const user = this.state.user ||  _.keys(this.props.users)[0];
    const usersList = _.map(users, this.renderUser);
    const tweetsList = _.get(users, [user, "rtweets"], []).map(this.renderTweets);

    return (
      <section className="top-mentioned-users-re-tweets">
        <div className="section-title">
          <SectionTitle value="TOP MENTIONED USERS IN RETWEETS" />
        </div>

        <Container className="section-content" fluid>
          <Row>
            <Col className="users-list" sm={6}>
              <Row className="m-0 container-heading">
                <Col sm={{ offset: 9, span: 3}}>Mark fake user</Col>
              </Row>

              <div className="users-container">{usersList}</div>
            </Col>
            <Col className="tweets-layout" sm={6}>
              <div className="tweets-list">
                {tweetsList}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
