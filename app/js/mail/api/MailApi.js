import { folders, messages } from '../../mockData';
import Q from 'q';
import _ from 'lodash';


const MailApi = {

  getFolders() {
    let deferred = Q.defer();
    setTimeout(() => {
      deferred.resolve(folders);
    }, 1);

    return deferred.promise;
  },


  getMessage(folderId, messageId) {
    let deferred = Q.defer();
    setTimeout(() => {
      var message = _.find(messages, (m) => m.id === messageId);
      deferred.resolve(message);
    }, 50);

    return deferred.promise;
  }
};

export default MailApi;