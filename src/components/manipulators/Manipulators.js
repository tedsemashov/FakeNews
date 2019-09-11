import React from "react";
import _ from "lodash";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import ReactPaginate from "react-paginate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import SectionTitle from "./../section-title/SectionTitle";
import {userAvatar} from "./../../utils/avatar";

import "./manipulators.css";

export const PER_PAGE = 15;

export default class Manipulators extends React.Component {
  spinner = (
    <div className="spinner-layout">
      <Spinner animation="border" role="status" variant="dark" />
    </div>
  );

  constructor(props) {
    super(props);

    this.state = {
      page: 0
    };

    this.onPageChange = this.onPageChange.bind(this);

    this.renderUser = this.renderUser.bind(this);

    this.renderPagination = this.renderPagination.bind(this);
  }

  list() {
    if(this.props.fn_users.length <= 0) return this.props.fn_users;

    const { page } = this.state;
    const offset = page * PER_PAGE;

    return _.slice(this.props.fn_users, offset, offset + PER_PAGE);
  }

  totalPages() { return Math.ceil(this.props.fn_users.length / PER_PAGE); }

  onPageChange({ selected }) { this.setState({ page: selected }); }

  renderUser(user) {
    const userData = _.get(this.props, ["top_users_tw", user]) || _.get(this.props, ["top_rt_users_tw", user]);
    const isProcessing = _.includes(this.props.processing, user);
    const nickname = _.startsWith(user, "@") ? user : `@${user}`;

    return(
      <Col key={user} className="grid-item" sm={4}>
        <div className="manipulator-user">
          {isProcessing && this.spinner}
          <Row className="m-0">
            <Col className="p-0" sm={3}>
              {userAvatar({ ...userData, nickname: user })}
            </Col>
            <Col className="p-0" sm={5}>
              <h5 className="user-name"> </h5>
              <br />
              <span className="user-nickname">{nickname}</span>
            </Col>
            <Col className="p-0 text-right" sm={4}>
              <button className="action" onClick={() => this.props.unmarkFake(user)}>
                DELETE
              </button>
            </Col>
          </Row>
        </div>
      </Col>
    );
  }

  renderPagination() {
    if (this.totalPages() < 2) return null;

     return(
      <ReactPaginate
        pageCount={this.totalPages()}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
        nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
        onPageChange={this.onPageChange}
        pageClassName={'pagination-item'}
        />
    )
  }

  render() {
    const users = this.list().map(this.renderUser);

    if(users.length <= 0) return null;

    return(
      <section className="manipulators-list">
        <div className="section-title">
          <SectionTitle value="MANIPULATORS LIST" />
        </div>

        <Container className="section-content" fluid>
          <Row className="grid-row">
            {users}
          </Row>
        </Container>

        {this.renderPagination()}
      </section>
    );
  }
}
