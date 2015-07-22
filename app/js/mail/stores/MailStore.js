import MailAppDispatcher from '../dispatcher/MailAppDispatcher';
import { ActionTypes } from '../constants/MailConstants';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import _ from 'lodash';

const EVENTS = {
  CHANGE: 'CHANGE',
  ERROR: 'ERROR'
};

const MailStore = assign({}, EventEmitter.prototype, {

  init(folders = []) {
    
    this._folders = folders;
    this._selectedFolder = null;
    this._selectedMessage = null;
  },

  emitChange() {
    this.emit(EVENTS.CHANGE);
  },

  onChange(callback) {
    this.addListener(EVENTS.CHANGE, callback);
  },

  offChange(callback) {
    this.removeListener(EVENTS.CHANGE, callback);
  },

  getFolders() {
    return this._folders;
  },

  getSelectedFolder() {
    return this._selectedFolder;
  },

  getSelectedMessage() {
    return this._selectedMessage;
  },

  getMessage(folderId, messageId) {
    return this._folders[folderId][messageId];
  },

  _setSelectedFolder(folderId) {
    this._selectedFolder = _.find(this._folders, (f) => { 
      return (f.id == folderId);
    });

    this.emitChange();
  },

  _setSelectedMessage(folderId, messageId) {
    this._selectedFolder = _.find(this._folders, (f) => { 
      return (f.id == folderId);
    });

    this._selectedMessage = _.find(this._selectedFolder.messages, (m) => {
      return (m.id == messageId);
    });
    this._selectedMessage.unread = false;

    this.emitChange();
  },
});


MailAppDispatcher.register((action) => {
  switch (action.type) {
    case ActionTypes.FOLDER_CHANGED:
      MailStore._setSelectedFolder(action.folderId);
      break;
    case ActionTypes.MESSAGE_SELECTED: 
      MailStore._setSelectedMessage(action.folderId, action.messageId);
      break;
    default:
      // do nothing
  }
});

export default MailStore;

