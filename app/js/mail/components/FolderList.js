import React from 'react';

import MailActionCreator from '../actions/MailActionCreator';
import FolderListItem from './FolderListItem';

class FolderList extends React.Component {

  render() {
    let folders = null;
    if (this.props.folders && this.props.folders.length) {
      folders = this.props.folders.map((folder, idx) => {
        return <FolderListItem folder={folder} key={idx}/>;
      })
    }
    else {
      folders = <div>No folders found.</div>;
    }

    return <div className="folder-list">  
      {folders}
    </div>;
  }
}

export default FolderList;