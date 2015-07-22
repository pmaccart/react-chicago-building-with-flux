import MailAppDispatcher from '../dispatcher/MailAppDispatcher';
import MailConstants from '../constants/MailConstants';

const MailActionCreator = {
  applicationStarted() {
    MailAppDispatcher.dispatch({
      type: MailConstants.ActionTypes.APP_STARTED
    })
  },

  folderChanged(folderId) {
    MailAppDispatcher.dispatch({
      folderId,
      type: MailConstants.ActionTypes.FOLDER_CHANGED,
    });
  },

  messageSelected(folderId, messageId) {
    MailAppDispatcher.dispatch({
      messageId,
      folderId,
      type: MailConstants.ActionTypes.MESSAGE_SELECTED
    });
  }
};

export default MailActionCreator;