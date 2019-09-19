import React from "react";
import _ from "lodash";
import classNames from "classnames";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import SectionTitle from "./../section-title/SectionTitle";
import NoData from "./../no-data/NoData";
import { convertLinks } from "./../../utils/convertLinks";
import { userAvatar } from "./../../utils/avatar";

import "./top-trolls-mentioned.css";

export function NextArrow({ currentSlide, slideCount, ...props }) {
  const show = currentSlide + 4 < slideCount;

  return show && (<div {...props}><FontAwesomeIcon icon={faChevronDown} /></div>);
}

export function PrevArrow({ currentSlide, slideCount, ...props }) {
  return currentSlide > 0 && (<div {...props}><FontAwesomeIcon icon={faChevronUp} /></div>);
}

export default class TopTrollsMentioned extends React.Component {
  renderTweet = (tweet, index) => (<div key={index} className="tweet">{convertLinks(tweet.text)}</div>);

  constructor(props) {
    super(props);

    this.state = { user: null };

    this.onUserChange = this.onUserChange.bind(this);
    this.renderUser = this.renderUser.bind(this);
  }

  onUserChange(user) { this.setState({ user }); }
  currentUser() { return this.state.user || _.keys(this.props.top_rt_fn_usr)[0]; }

  renderUser(userData, user) {
    const key = Math.random();
    const onClick = () => this.onUserChange(user);
    const isActive = this.currentUser() === user;
    const className = classNames("user-row", { isActive });

    return(
      <div data-index={key} key={key} className={className} onClick={onClick}>
        <Row>
          <Col className="user-avatar-col" sm={2}>{userAvatar({...userData, nickname: user})}</Col>
          <Col sm={6}>
            <h5 className="user-name"> </h5>
            <p className="user-nickname">@{user}</p>
          </Col>
          <Col className="text-right" sm={4}>
            <span className="button-view info">
              <b>{userData.rt_user_count}</b> retweets
            </span>
            <span className="button-view fake"><b>{_.round(userData.fnews_pred_mean * 100)}%</b> fake news</span>
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    const { top_rt_fn_usr } = this.props;
    const user = this.currentUser();
    const usersList = _.map(top_rt_fn_usr, this.renderUser);
    const tweetsList = _.get(top_rt_fn_usr, [user, "top_rtweets"], []).map(this.renderTweet);

    return(
      <section className="top-trolls-mentioned">
        <SectionTitle value="TOP TROLLS MENTIONED IN RETWEETS" />

        <Container className="section-content" fluid>
          <Row>
            <Col sm={6}>
              <div className="users-list">
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

            <Col sm={6}>
              <div className="tweets-list">
                {_.isEmpty(tweetsList) ? <NoData /> : tweetsList}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
