import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, css } from 'aphrodite';

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

const changeOpacity = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const translateKeyframes = {
  '0%': {
    transform: 'translateY(0)',
  },

  '50%': {
    transform: 'translateY(-5px)',
  },

  '75%': {
    transform: 'translateY(5px)',
  },

  '100%': {
    transform: 'translateY(0)',
  },
};

const stylesAp = StyleSheet.create({
  notifications: {
    position: 'relative',
    border: '2px dashed red',
    padding: 13,
    width: '100%',
  },
  small: {
    '@media (max-width: 900px)': {
      width: '96.5vw',
      height: '200vh',
      padding: 0,
      fontSize: 20,
      background: 'white',
      border: 'none',
    },
  },
  noPaddingSmall: {
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },

  menuItem: {
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animationName: [changeOpacity, translateKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
    },
  },

  menuDisplay: {
    display: 'block',
  },
  meneNoDisplay: {
    display: 'none',
  },
});

class Notifications extends React.Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.displayDrawer !== this.props.displayDrawer) {
      return true;
    }
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
        <div
          className={css(
            stylesAp.menuItem,
            this.props.displayDrawer
              ? stylesAp.meneNoDisplay
              : stylesAp.menuDisplay,
          )}
          onClick={() => this.props.handleDisplayDrawer()}
        >
          Your notifications
        </div>
        {this.props.displayDrawer && (
          <div className={css(stylesAp.notifications, stylesAp.small)}>
            <button
              style={styles}
              aria-label="Close"
              onClick={() => this.props.handleHideDrawer()}
            >
              <img src={closeIcon} alt="close icon" width="10" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(stylesAp.noPaddingSmall)}>
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
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
