import React from 'react';

import MailActionCreator from '../actions/MailActionCreator';

import MessageListItem from './MessageListItem';

class MessageList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let messageListItems;
    let selectedMessage = this.props.selectedMessage;
    if (this.props.folder) {
      messageListItems = this.props.folder.messages.map((message) => {
        let isSelected = (message == selectedMessage)
        return <MessageListItem folder={this.props.folder} message={message} selected={isSelected}/>
      });
    }
    else {
      messageListItems = <div>No folder selected</div>;
    }

    return <div className="message-list">
      {messageListItems}
    </div>;
  }
};

export default MessageList;