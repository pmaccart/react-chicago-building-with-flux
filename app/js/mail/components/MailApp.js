import React from 'react';

import MailActionCreator from '../actions/MailActionCreator';

// Store
import MailStore from '../stores/MailStore';

// Components
import FolderList from './FolderList';
import MessageList from './MessageList';
import Message from './Message';

class MailApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = this._getState();

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    MailStore.addChangeListener(this._onChange);

    MailActionCreator.applicationStarted();
  }

  componentWillUnmount() {
    MailStore.removeChangeListener(this._onChange);
  }

  render() {
    let folders = this.state.folders;
    let folder = this.state.selectedFolder;
    let message = this.state.selectedMessage;

    return <div>
      <h2 className="text-center">FluxMail</h2>
      <div className="row">
        <div className="col-xs-2 col-left">
          <FolderList folders={folders} />
        </div>
        <div className="col-xs-4 col-middle">
          <MessageList folder={folder} selectedMessage={message}/>
        </div>
        <div className="col-sm-6 col-right">
          <Message message={message} />
        </div>
      </div>
    </div>;
  }

  _onChange() {
    this.setState(this._getState());
  }

  _getState() {
    return {
      folders: MailStore.getFolders(),
      selectedFolder: MailStore.getSelectedFolder(),
      selectedMessage: MailStore.getSelectedMessage()
    };

  }

}

export default MailApp;