import React from 'react';

import MailActionCreator from '../actions/MailActionCreator';

class MessageListItem extends React.Component {
  constructor(props) {
    super(props)
    this._onClick = this._onClick.bind(this);
  }

  render() {
    let message = this.props.message;
    let classNames = "message-list-item" + (message.unread ? " message-list-item-unread" : "");
    
    return <div className={classNames}>
      <div>From: {message.from}</div>
      <div>To: {message.to}</div>
      <div><a onClick={this._onClick}><strong>{message.subject}</strong></a></div>
    </div>;
  }

  _onClick(e) {
    e.preventDefault();
    MailActionCreator.messageSelected(this.props.folder.id, this.props.message.id);
  }

}

export default MessageListItem;