import React from "react";
import _ from "lodash";
import classNames from "classnames";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import SectionTitle from "../section-title/SectionTitle";
import { userAvatar } from "../../utils/avatar";

import "./top-mentioned-users-re-tweets.css";

export default class TopMentionedUsersReTweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      processing: []
    };

    this.onMarkFake = this.onMarkFake.bind(this);
    this.onMarkManipulator = this.onMarkManipulator.bind(this);

    this.renderUser = this.renderUser.bind(this);
    this.renderTweets = this.renderTweets.bind(this);
  }

  onMarkFake(user) {
    console.log("onMarkFake", user);
  }

  onMarkManipulator(user) {
    console.log("onMarkManipulator", user);
  }

  renderUser(userData, user) {
    if(_.includes(this.props.fn_users, user)) return null;

    const processing = _.includes(this.state.processing, user);
    const buttonClass = classNames("mark-fake", { active: _.includes(this.props.fn_users, user) });
    const onClick = () => this.onMarkManipulator(user);
    const onSelect = () => this.setState({ user });

    return(
      <Row className="m-0 user-row" key={`${user}-${processing}`} >
        <Col className="pl-0 user-selection" sm={9} onClick={onSelect}>
          <Row>
            <Col className="" sm={3}>{userAvatar({...userData, nickname: user})}</Col>
            <Col className="user-details" sm={6}>
              <h5 className="user-name"> </h5>
              <span className="user-nickname">@{user}</span>
            </Col>
          </Row>
        </Col>
        <Col sm={3}>
          <Button className={buttonClass} onClick={onClick}>
            Fake
          </Button>
        </Col>
      </Row>
    );
  }

  renderTweets(tweet, index) {
    debugger;

    return(
      <div className="tweet" key={index}>
        {tweet}
      </div>
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
