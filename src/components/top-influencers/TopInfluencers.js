import React from "react";
import _ from "lodash";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import SectionTitle from '../section-title/SectionTitle';
import InfluencerDetails from '../influencer-details/InfluencerDetails';
import NoData from "./../no-data/NoData";
import {convertLinks} from "../../utils/convertLinks";

import './topInfluencers.css';

export function NextArrow({ currentSlide, slideCount, ...props }) {
  const show = currentSlide + 4 < slideCount;

  return show && (<div {...props}><FontAwesomeIcon icon={faChevronDown} /></div>);
}

export function PrevArrow({ currentSlide, slideCount, ...props }) {
  return currentSlide > 0 && (<div {...props}><FontAwesomeIcon icon={faChevronUp} /></div>);
}

export default class TopInfluencers extends React.Component {
  renderTweets = (tweet) => {
    return(
      <div className="tweet-row" key={tweet.id}>
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

    this.state = { user: null };

    this.onUserChange = this.onUserChange.bind(this);
  }

  onUserChange(user) { this.setState({ user: user.slice(1, user.length) }); }

  render() {
    const { topInfluencers } = this.props;
    const selectedUser = this.state.user || _.keys(topInfluencers)[0];
    const usersList = _.map(topInfluencers, (userData, user) => {
      const isSelected = user === selectedUser;
      const className = classNames("user-row", { isSelected });

      return(
        <div data-index={user} className={className} key={user}>
          <InfluencerDetails
            account={`@${user}`}
            name={userData.user_name}
            img={userData.user_profile_image_url}
            tweets={userData.user_statuses_count}
            followers={userData.user_followers_count}
            setSelectedUser={this.onUserChange}
            color="orange"
            />
        </div>
      );
    });
    const tweetsList = _.get(topInfluencers, [selectedUser, "top_tweets"], []).map(this.renderTweets);

    return(
      <div className="top-influencers">
        <div className="title-container">
          <SectionTitle value="TOP INFLUENCERS" />
        </div>

        <Container fluid>
          <Row>
            <Col className="users-list-container pl-0" sm={6}>
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

            <Col className="tweets-list-container pr-0" sm={6}>
              <div className="tweets-list">
                <h5 className="heading-label">Top tweets</h5>
                {_.isEmpty(tweetsList) ? <NoData /> : tweetsList}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
