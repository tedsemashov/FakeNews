import React from 'react';
import _ from 'lodash';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { userAvatar } from "../../../utils/avatar";

import '../topNews/top-news.css';

export default class TopRetweetedNews extends React.Component{
  render() {
    const { topReTweetedNews } = this.props;
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
                <Col md="10" className="news-text">
                 {userAvatar(news.image_url)}

                 <span>
                   {_.get(news, 'text', '')}
                 </span>
                </Col>
                <Col md="2" className="mark-fake-button">
                 <button className={news.clicked ? 'not-fake' : 'fake'} onClick={this.toggleFakeStatus}>
                   <span/>
                   Fake
                 </button>
                </Col>
              </Row>
            )}
          )}
        </div>
      </Container>
    );
  }
}
