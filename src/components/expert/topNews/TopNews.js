import React from 'react';
import _ from 'lodash';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import './top-news.css';
import checkIcon from "./../../../images/tip_icon.svg";


export default class TopNews extends React.Component {
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
    const title = 'Top news';
    const { topNewsList, topNewsProcessing } = this.props;

    return(
      <Container className="inner-container top-news" fluid>
        <Row>
          <Col sm={10} className='news-block-header'>
            <h2>{title}</h2>
          </Col>
          <Col sm={2} className="hint-text">
            <span>Mark news as fake</span>
          </Col>
        </Row>
        {_.map(topNewsList, (news)=> {
          const processing = _.includes(topNewsProcessing, news.id_txt);

          return(
            <Row className='expert-top-news m-0' key={news.id_txt}>
            {processing && this.spinner}
              <Col sm="10" className="news-text">
                <span>
                 {_.get(news, 'text', '')}
                </span>
              </Col>
              <Col sm="2" className="mark-fake-button">
                {this.renderButton(news)}
              </Col>
            </Row>
          )}
        )}
      </Container>
    );
  }
}
