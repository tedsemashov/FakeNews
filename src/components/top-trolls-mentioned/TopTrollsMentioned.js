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
import TwitterBadge from "./../twitter-badge/TwitterBadge";
import { convertLinks } from "./../../utils/convertLinks";
import { convertNumbers } from "./../../utils/convertNumbers";
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
    const onSelect = () => this.onUserChange(user);
    const isSelected = this.currentUser() === user;
    const className = classNames("m-0 user-row", { isSelected });

    return(
      <div className={className} key={user} >
        <Row>
          <Col sm={7}>
            <div className="user-selection" onClick={onSelect}>
              <Row>
                <Col className="user-avatar-col pr-0" sm={3}>{userAvatar({...userData, nickname: user})}</Col>
                <Col className="user-details pl-0" sm={9}>
                  <h5 className="user-name"> </h5>
                  <p className="user-nickname">
                    @{user}
                    <TwitterBadge nickname={user} asIcon />
                  </p>
                </Col>
              </Row>
            </div>
          </Col>

          <Col className="buttons" sm={5}>
            <button className="button-view info"><b>{convertNumbers(userData.rt_user_count)}</b> retweets </button>
            <button className="button-view fake"> <b>{_.round(userData.fnews_pred_mean * 100)}%</b> fake news </button>
          </Col>
        </Row>
      </div>
    );
  }

  renderSlider(list) {
    if(list.length <= 4) return list;

    return(
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
        {list}
      </Slider>
    );
  }

  render() {
    const { top_rt_fn_usr } = this.props;
    const user = this.currentUser();
    const usersList = _.map(top_rt_fn_usr, this.renderUser);
    const tweetsList = _.get(top_rt_fn_usr, [user, "top_rtweets"], []).map(this.renderTweet);

    return(
      <section className="top-trolls-mentioned">
        <div className="section-title">
        <SectionTitle value="TOP TROLLS MENTIONED IN RETWEETS" />
        </div>

      <Container className="section-content" fluid>
        <Row>
          <Col className="users-list" sm={6}>
            <div className="users-container">
              {!_.isEmpty(usersList) && this.renderSlider(usersList)}
            </div>
          </Col>
          <Col className="tweets-layout" sm={6}>
            <div className="tweets-list">
              <h5 className="heading-label">Top retweets</h5>
              {_.isEmpty(tweetsList) ? <NoData/> : tweetsList}
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    );
  }
}
