import React from 'react';
import _ from 'lodash';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Spinner from "../../spinner/Spinner";
import TwitterBadge from "./../../twitter-badge/TwitterBadge";
import { convertLinks } from "./../../../utils/convertLinks";

import { userAvatar } from "../../../utils/avatar";
import checkIcon from "./../../../images/tip_icon.svg";

import '../topNews/top-news.css';

export default class TopRetweetedNews extends React.Component {
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
    const title = 'Top retweeted news';

    return(
      <Container className="inner-container top-news" fluid>
        <Row>
          <Col sm={10} className='news-block-header'>
            <h2 className="retweeted-news-title">{title}</h2>
          </Col>
        </Row>
        <div className="news">
          {_.map(topReTweetedNews, (news)=> {
            const processing = _.includes(topReTweetedNewsProcessing, news.id_txt);
            const newsText = _.get(news, "text", "");
            const mention = newsText.match(/RT @([^:]+)/i);
            const nickname = mention[1];

            return(
              <Row className='expert-top-news m-0' key={news.id_txt}>
                {processing && <Spinner size="small"/>}
                <Col md="10" className="news-text">
                 {userAvatar(news.image_url)}

                 <span>
                  {
                    nickname ?
                    <React.Fragment>
                      RT @{nickname}
                      <TwitterBadge nickname={nickname} asIcon />
                      {convertLinks(newsText.replace(mention[0], ""))}
                    </React.Fragment>
                    :
                    convertLinks(newsText)
                  }
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
