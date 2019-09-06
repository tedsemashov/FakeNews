import React from 'react';
import _ from 'lodash';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './top-news.css';

export default class TopNews extends React.Component{
  toggleFakeStatus() {
    //this.props.toggleFakeStatus();
  }

  render() {
    const { topNewsList } = this.props;
    const title = 'Top news';

    return(
      <Container className="top-news-section" fluid>
        <Row>
          <Col className='news-block-header'>
            <h2>{title}</h2>
            <span>Mark news as fake</span>
          </Col>
        </Row>
        {_.map(topNewsList, (news)=> {
          return(
            <Row className='expert-top-news m-0' key={news.id_txt}>
              <Col md="10" className="news-text">
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
      </Container>
    );
  }
}
