import React from "react";

import "./flash-message.css";

export default class FlashMessage extends React.Component {
  constructor(props) {
    super(props);

    this.onShow = this.onShow.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
  }

  onShow() {
    window.setTimeout(() => {
      this.removeMessage()
    }, 2000);
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
          {flashMessage}
          {this.onShow()}
        </div>
      </div>
    );
  }
}
