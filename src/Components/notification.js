import React from 'react';
import 'rc-notification/assets/index.css';
import Notification from 'rc-notification';

const notification = (text) => {
  Notification.newInstance({}, (n) => {
    n.notice({
      content: <span>{ text }</span>,
      duration: 3,
    });
  });
};

export default notification;
