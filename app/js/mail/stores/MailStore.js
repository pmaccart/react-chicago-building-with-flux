import MailAppDispatcher from '../dispatcher/MailAppDispatcher';
import { ActionTypes } from '../constants/MailConstants';
import MailApi from '../api/MailApi';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import _ from 'lodash';

const EVENTS = {
  CHANGE: 'CHANGE',
  ERROR: 'ERROR'
};


var _folders = [];
var _messages = [];
var _messages = [];
var _selectedFolder = null;
var _selectedMessage = null;
class MailStore extends EventEmitter {

  constructor() {
    super();
    MailAppDispatcher.register((action) => {
      switch (action.type) {
        case ActionTypes.APP_STARTED: 
          this._getFolders();
        case ActionTypes.FOLDER_CHANGED:
          this._setSelectedFolder(action.folderId);
          break;
        case ActionTypes.MESSAGE_SELECTED: 
          this._setSelectedMessage(action.folderId, action.messageId);
          break;
        default:
          // do nothing
      }
    })
  }

  emitChange() {
    this.emit(EVENTS.CHANGE);
  }

  emitError(err) {
    this.emit(EVENTS.ERROR, err);
  }

  addChangeListener(callback) {
    this.addListener(EVENTS.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(EVENTS.CHANGE, callback);
  }

  getFolders() {
    return _folders;
  }

  getSelectedFolder() {
    return _selectedFolder;
  }

  getSelectedMessage() {
    return _selectedMessage;
  }

  _getFolders() {
    MailApi.getFolders().then((folders) => {
      _folders = folders;
      this.emitChange();
    }, () => {
      this.emitError('Error loading folders!');
    });
  }

  _getMessage(folderId, messageId) {
    MailApi.getMessage(folderId, messageId).then((message) => {
      _messages[messageId] = message;
      this.emitChange();
    }, () => {
      this.emitError('Error getting message.');
    })
  }

  _setSelectedFolder(folderId) {  
    _selectedFolder = _.find(_folders, (f) => { 
      return (f.id == folderId);
    });

    this.emitChange();
  }

  _setSelectedMessage(folderId, messageId) {
    if (_messages[messageId]) {
      _selectedMessage = _messages[messageId];
      _selectedMessage.unread = false;
    }
    else {
      MailApi.getMessage(folderId, messageId).then((message) => {
        _messages[messageId] = message;
        _selectedMessage = message
        _selectedMessage.unread = false;

        this.emitChange();
      });
    }

    // mark the folder message as read
    let folder = _.find(_folders, (f) => f.id === folderId);
    let folderMessage = _.find(folder.messages, (m) => m.id === messageId);
    folderMessage.unread = false;
    this.emitChange();
  }
};


export default new MailStore();

