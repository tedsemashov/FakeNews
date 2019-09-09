import React from 'react';
import _ from 'lodash';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { userAvatar } from "../../../utils/avatar";
import checkIcon from "./../../../images/tip_icon.svg";

import '../topNews/top-news.css';

export default class TopRetweetedNews extends React.Component {
  spinner = (
    <div className="spinner-layout">
      <Spinner animation="border" role="status" variant="dark" />
    </div>
  );

  renderButton(news) {
    const isFake = news.checked === 1;
    const onClick = () => this.props.toggleFakeStatus(news);

    return(
      <Button className={isFake ? "not-fake" : "fake"} onClick={onClick}>
        {isFake && <img className="check-icon" src={checkIcon} alt="" />}
        Fake
      </Button>
    );
  }

  render() {
    const { topReTweetedNews, topReTweetedNewsProcessing } = this.props;
    const title = 'Top retweeted neews';

    return(
      <Container className="inner-container top-news" fluid>
        <Row>
          <Col sm={10} className='news-block-header'>
            <h2 className="retweeted-news-title">{title}</h2>
          </Col>
          <Col sm={2} className="hint-text">
            <span>Mark news as fake</span>
          </Col>
        </Row>
        <div className="news">
          {_.map(topReTweetedNews, (news)=> {
            return(
              <Row className='expert-top-news m-0' key={news.id_txt}>
              {_.includes(topReTweetedNewsProcessing, news.id_txt) && this.spinner}
                <Col md="10" className="news-text">
                 {userAvatar(news.image_url)}

                 <span>
                   {_.get(news, 'text', '')}
                 </span>
                </Col>
                <Col md="2" className="mark-fake-button">
                  {this.renderButton(news)}
                </Col>
              </Row>
            )}
          )}
        </div>
      </Container>
    );
  }
}
