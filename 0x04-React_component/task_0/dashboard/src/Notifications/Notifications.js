import React from 'react';
import PropTypes from 'prop-types';

import './Notifications.css';

import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';

import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer, listNotifications }) {
  const styles = {
    position: 'absolute',
    right: '5px',
    top: '5px',
    backgroundColor: 'white',
    border: 'none',
  };
  return (
    <React.Fragment>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
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
            {listNotifications.length === 0 ? (
              <li>No new notification for now</li>
            ) : (
              listNotifications.map((item) => {
                return (
                  <NotificationItem
                    key={item.id}
                    type={item.type}
                    html={item.html}
                    value={item.value}
                  />
                );
              })
            )}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
