import React from 'react';

import MailActionCreator from '../actions/MailActionCreator';

class Message extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let message;
    if (!this.props.message) {
      message = <div>No message selected</div>;
    }
    else {
      message = <div> 
        <div>From: {this.props.message.from}</div>
        <div>To: {this.props.message.to}</div>
        <div>{this.props.message.subject}</div>
        <div>
          <p>{this.props.message.body}</p>
        </div>
      </div>
    }

    return <div className="message">
      {message}
    </div>

  }

}

export default Message;