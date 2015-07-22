import React from 'react';
import _ from 'lodash';

import MailActionCreator from '../actions/MailActionCreator';

class FolderListItem extends React.Component {

  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this)
  }

  render() {
    let unreadCount = _.filter(this.props.folder.messages, (m) => m.unread).length;
    let unreadLabel = (unreadCount > 0) ? <span>({unreadCount})</span> : '';
    return <div className="folder">
      <a href="#" onClick={this._onClick}>{this.props.folder.label} {unreadLabel}</a>
    </div>;
  }

  _onClick(e){
    e.preventDefault();
    MailActionCreator.folderChanged(this.props.folder.id)
  }

}

export default FolderListItem;