const folders = [{
    id: 'inbox',
    label: 'Inbox',
    messages: [
      {id: 101, unread: true, from: 'Jim', to: 'Phil', subject: 'Lunch?'},
      {id: 102, unread: true, from: 'Lisa', to: 'Phil', subject: 'Product Launch'},
      {id: 103, unread: false, from: 'Sarah', to: 'Phil', subject: 'Release'},
      {id: 104, unread: false, from: 'Allen', to: 'Phil', subject: 'Weekend Plans?'},
      {id: 105, unread: true, from: 'John', to: 'Phil', subject: 'Meetup'},
      {id: 106, unread: false, from: 'Rina', to: 'Phil', subject: 'New Hire'},
    ]
  }, {
    id: 'drafts',
    label: 'Drafts',
    messages: [
      {id: 201, unread: false, from: 'Phil', to: 'Jim', subject: 'Re: Lunch?'}
    ]
  }, {
    id: 'deleted',
    label: 'Deleted',
    messages: [
      {id: 301, unread: false, from: 'Time Approvals', to: 'Phil', subject: 'Your time is overdue!'}
    ]
  }
];

const messages = [
  {id: 101, unread: true, from: 'Jim', to: 'Phil', subject: 'Lunch?', body: 'Want to grab lunch today?'},
  {id: 102, unread: true, from: 'Lisa', to: 'Phil', subject: 'Product Launch', body: 'Our product launches on August 28th!'},
  {id: 103, unread: false, from: 'Sarah', to: 'Phil', subject: 'Release', body: 'Can you manage the release this evening?'},
  {id: 104, unread: false, from: 'Allen', to: 'Phil', subject: 'Weekend Plans?', body: 'Want to catch a show this weekend?'},
  {id: 105, unread: true, from: 'John', to: 'Phil', subject: 'Meetup', body: 'Can\'t wait for the meetup on Wednesday!'},
  {id: 106, unread: false, from: 'Rina', to: 'Phil', subject: 'New Hire', body: 'We have 3 new hires starting on Monday!'},
  {id: 201, unread: false, from: 'Phil', to: 'Jim', subject: 'Re: Lunch?', body: 'Sounds great! What time?'},
  {id: 301, unread: false, from: 'Time Approvals', to: 'Phil', subject: 'Your time is overdue!', body: 'Please submit your time entries!'}
  
];


export { folders, messages };
