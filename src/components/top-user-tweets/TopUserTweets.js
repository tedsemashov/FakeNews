import React from "react";
import _ from "lodash";
import classNames from "classnames";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Spinner from "../spinner/Spinner";
import SectionTitle from "../section-title/SectionTitle";
import TwitterBadge from "./../twitter-badge/TwitterBadge";
import { userAvatar } from "../../utils/avatar";
import {  convertLinks } from "./../../utils/convertLinks";

import "./top-user-tweets.css";
import checkIcon from "./../../images/tip_icon.svg";

export function NextArrow({ currentSlide, slideCount, ...props }) {
  const show = currentSlide + 4 < slideCount;

  return show && (<div {...props}><FontAwesomeIcon icon={faChevronDown} /></div>);
}

export function PrevArrow({ currentSlide, slideCount, ...props }) {
  return currentSlide > 0 && (<div {...props}><FontAwesomeIcon icon={faChevronUp} /></div>);
}

export default class TopUserTweets extends React.Component {
  autoSelectedUser = (scope, selection) => {
    const selected = selection || _.keys(scope)[0];

    return scope.hasOwnProperty(selected) ? selected : _.keys(scope)[0];
  };

  renderTweets = (tweet, index) => {
    return(
      <div className="tweet" key={index}>
        {convertLinks(tweet)}
      </div>
    );
  };

  constructor(props) {
    super(props);

    this.state = { user: null };

    this.renderUser = this.renderUser.bind(this);
    this.renderTweets = this.renderTweets.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const selected = this.state.user;

    if(_.isNil(selected) || this.props.users.hasOwnProperty(selected)) return;

    this.setState({
      user: this.autoSelectedUser(this.props.users, selected)
    });
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
    const selectedUser = this.state.user ||  _.keys(this.props.users)[0];
    const isSelected = selectedUser === user;
    const className = classNames("m-0 user-row", { isSelected });

    return(
      <div className={className} key={`${user}-${isProcessing}`} >
        {isProcessing && <Spinner size="small"/>}

        <Row>
          <Col sm={9}>
            <div className="user-selection" onClick={onSelect}>
              <Row>
                <Col className="user-avatar-col" sm={3}>{userAvatar({...userData, nickname: user})}</Col>
                <Col className="user-details" sm={9}>
                  <h5 className="user-name"> </h5>
                  <span className="user-nickname">
                    @{user}
                    <TwitterBadge nickname={user} asIcon />
                  </span>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={3}>
            {this.renderButton(user)}
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    const { users } = this.props;
    const user = this.autoSelectedUser(this.props.users, this.state.user);
    const usersList = _.map(users, this.renderUser);
    const tweetsList = _.get(users, [user, "tweets"], []).map(this.renderTweets);

    return (
      <section className="top-user-tweets">
        <div className="section-title">
          <SectionTitle value="TOP USER'S TWEETS" />
        </div>

        <Container className="section-content" fluid>
          <Row>
            <Col className="users-list" sm={6}>
              <div className="users-container">
                {
                  !_.isEmpty(usersList) &&
                  <Slider
                    infinite={false}
                    slidesToShow={4}
                    slidesToScroll={1}
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                    vertical
                    verticalSwiping
                    swipeToSlide
                    >
                    {usersList}
                  </Slider>
                }
              </div>
            </Col>
            <Col className="tweets-layout" sm={6}>
              <div className="tweets-list">
                <h5 className="heading-label">Top tweets</h5>
                {_.isEmpty(tweetsList) ? "No data" : tweetsList}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
