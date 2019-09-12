import React from "react";

import checkIcon from "./../../images/icons/check-icon-white.svg";
import closeIcon from "./../../images/icons/close-icon.svg";

import "./flash-message.css";

export default class FlashMessage extends React.Component {
  constructor(props) {
    super(props);

    this.setTimer = this.setTimer.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
  }

  setTimer() {
    window.setTimeout(() => {
      this.removeMessage()
    }, 12000);
  }

  removeMessage() {
    this.props.removeFlashMessage();
  }

  render() {
    const { flashMessage } = this.props;

    if(!flashMessage) return null;

    return (
      <div className="flash-message-container">
        <div className="flash-message">
          <img className="check-icon" src={checkIcon} alt="" />
          {flashMessage}
          {this.setTimer()}
          <img className="close-icon" src={closeIcon} alt="" onClick={this.removeMessage} />
        </div>
      </div>
    );
  }
}
