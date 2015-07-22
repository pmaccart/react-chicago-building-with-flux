"use strict";
import React from 'react';
import MailApp from './mail/components/MailApp';
import MailStore from './mail/stores/MailStore';

import folders from './mockData'
MailStore.init(folders);

React.render(<MailApp />, document.getElementById('main'));
