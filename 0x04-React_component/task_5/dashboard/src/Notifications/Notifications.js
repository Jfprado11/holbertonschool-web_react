import React from 'react';
import PropTypes from 'prop-types';

import './Notifications.css';

import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';

import NotificationItemShape from './NotificationItemShape';

const styles = {
  position: 'absolute',
  right: '5px',
  top: '5px',
  backgroundColor: 'white',
  border: 'none',
};
class Notifications extends React.Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    if (
      nextProps.listNotifications.length <= this.props.listNotifications.length
    ) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <React.Fragment>
        <div className="menuItem">Your notifications</div>
        {this.props.displayDrawer && (
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
              {this.props.listNotifications.length === 0 ? (
                <li>No new notification for now</li>
              ) : (
                this.props.listNotifications.map((item) => {
                  return (
                    <NotificationItem
                      key={item.id}
                      id={item.id}
                      type={item.type}
                      html={item.html}
                      value={item.value}
                      markAsRead={this.markAsRead}
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
