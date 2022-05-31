import React from 'react';
import './Notifications.css';

import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
  const styles = {
    position: 'absolute',
    right: '5px',
    top: '5px',
    backgroundColor: 'white',
    border: 'none',
  };
  return (
    <div className="Notifications">
      <button
        style={styles}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="close icon" width="10" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New course available" />
        <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
    </div>
  );
}

export default Notifications;
