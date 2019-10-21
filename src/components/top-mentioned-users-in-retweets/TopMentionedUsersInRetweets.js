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
import { convertLinks } from "./../../utils/convertLinks";

import './TopMentionedUsers.css';

export function NextArrow({ currentSlide, slideCount, ...props }) {
  const show = currentSlide + 4 < slideCount;

  return show && (<div {...props}><FontAwesomeIcon icon={faChevronDown} /></div>);
}

export function PrevArrow({ currentSlide, slideCount, ...props }) {
  return currentSlide > 0 && (<div {...props}><FontAwesomeIcon icon={faChevronUp} /></div>);
}

export default class TopMentionedUsersInRetweets extends React.Component {
  autoSelectedUser = (scope, selection) => {
    const selected = selection || _.keys(scope)[0];

    return scope.hasOwnProperty(selected) ? selected : _.keys(scope)[0];
  };

  renderTweets = (tweet, index) => {
    return(
      <div className="tweet-row" key={index}>
        <div className="tweet-body">{convertLinks(tweet.text)}</div>
      </div>
    );
  };

  constructor(props) {
    super(props);

    this.state = { user: null };

    this.onUserChange = this.onUserChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const selected = this.state.user;

    if(_.isNil(selected) || this.props.top_rt_m_usr.hasOwnProperty(selected)) return;

    this.setState({
      user: this.autoSelectedUser(this.props.top_rt_m_usr, selected)
    });
  }

  onUserChange(user) { this.setState({ user: user.slice(1, user.length) }); }

  render() {
    const { top_rt_m_usr } = this.props;
    const selectedUser = this.autoSelectedUser(top_rt_m_usr, this.state.user);
    const usersList = _.map(top_rt_m_usr, (userData, user) => {
      const isSelected = user === selectedUser;
      const className = classNames("user-row", { isSelected });

      return(
        <div data-index={user} className={className} key={user}>
          <InfluencerDetails
            account={`@${user}`}
            name={""}
            setSelectedUser={this.onUserChange}
            color="orange"
            skipDetails
            />
        </div>
      );
    });
    const tweetsList = _.get(top_rt_m_usr, [selectedUser], []).map(this.renderTweets);

    return(
      <div className="top-mentioned-users-in-retweets">
        <div className="title-container">
          <SectionTitle value="TOP MENTIONED USERS" />
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
                <h5 className="heading-label">Top retweets</h5>
                {_.isEmpty(tweetsList) ? <NoData /> : tweetsList}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
