import folder from '../../mockData';
import Q from 'q';


const MailApi = {

  getFolder(folderId) {
    let deferred = Q.defer();
    setTimeout(() => {
      deferred.resolve(folder[folderId]);
    }, 1000);

    return deferred.promise;
  }

  getMessage(folderId, messageId) {
    let deferred = Q.defer();
    setTimeout(() => {
      deferred.resolve(folder[folderId][messageId]);
    }, 1000);

    return deferred.promise;
  }
};

export default MailApi;