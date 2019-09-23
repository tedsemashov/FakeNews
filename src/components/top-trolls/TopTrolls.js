import React from 'react';
import _ from "lodash";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames";

import SectionTitle from '../section-title/SectionTitle';
import NoData from "./../no-data/NoData";
import TwitterBadge from "./../twitter-badge/TwitterBadge";
import { convertNumbers } from "../../utils/convertNumbers";
import { userAvatar } from "../../utils/avatar";
import { convertLinks } from "../../utils/convertLinks";

import './topTrolls.css';

export function NextArrow({ currentSlide, slideCount, ...props }) {
  const show = currentSlide + 4 < slideCount;

  return show && (<div {...props}><FontAwesomeIcon icon={faChevronDown} /></div>);
}

export function PrevArrow({ currentSlide, slideCount, ...props }) {
  return currentSlide > 0 && (<div {...props}><FontAwesomeIcon icon={faChevronUp} /></div>);
}

export default class TopTrolls extends React.Component {
  renderTweets = (tweet) => {
    return(
      <div className="tweet tweet-row" key={tweet.id}>
        <div className="tweet-meta">
          <span className="nickname">@{tweet.screen_name}</span>
          &nbsp;&middot;&nbsp;
          <span className="date">{tweet.date}</span>
        </div>

        <div className="tweet-body">
          {convertLinks(tweet.text)}
        </div>
      </div>
    );
  };

  constructor(props) {
    super(props);

    this.state = { selected: null };

    this.renderUser = this.renderUser.bind(this);
    this.renderTweets = this.renderTweets.bind(this);
  }

  renderUser(userData, user) {
    const onSelect = () => this.setState({ selected: user });
    const selectedUser = this.state.selected || _.keys(this.props.topTrolls)[0];
    const isSelected = selectedUser === user;
    const className = classNames("m-0 user-row", { isSelected });

    return(
      <div className={className} key={user} >
        <Row>
          <Col sm={7}>
            <div className="user-selection" onClick={onSelect}>
              <Row>
                <Col className="user-avatar-col pr-0" sm={3}>{userAvatar({...userData, nickname: user})}</Col>
                <Col className="user-details pl-0" sm={9}>
                  <h5 className="user-name">{userData.user_name} </h5>
                  <p className="user-nickname">
                    @{user}
                    <TwitterBadge nickname={user} asIcon />
                  </p>
                </Col>
              </Row>
            </div>
          </Col>

          <Col className="buttons" sm={5}>
            <button className="btnTweets buttonsTweetFollowers pr-1"> {convertNumbers(userData.user_tw_count)} tweets </button>
            <button className="btnFollowers buttonsTweetFollowers pr-1"> {convertNumbers(userData.user_followers_count)} followers </button>
            <button className="btnFakeNews"> {_.round(userData.fnews_pred_mean*100, 0)}% fake news </button>
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    const selected = this.state.selected || _.keys(this.props.topTrolls)[0];
    const { topTrolls } = this.props;
    const topTrollsList = _.map(topTrolls, this.renderUser);
    const tweetsList = _.get(topTrolls, [selected, "top_tweets"], []).map(this.renderTweets);

    return (
      <section className="topTrollsContainer">
        <div className="section-title">
          <SectionTitle value="TOP TROLLS" />
        </div>

        <Container className="section-content" fluid>
          <Row>
            <Col className="users-list" sm={6}>
              <div className="users-container">
                {
                  !_.isEmpty(topTrollsList) &&
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
                    {topTrollsList}
                  </Slider>
                }
              </div>
            </Col>
            <Col className="tweets-layout" sm={6}>
              <div className="tweets-list">
                {_.isEmpty(tweetsList) ? <NoData/> : tweetsList}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
