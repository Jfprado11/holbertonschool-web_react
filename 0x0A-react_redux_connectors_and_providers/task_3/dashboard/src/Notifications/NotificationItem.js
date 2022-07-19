import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  urgent: {
    color: 'red',
  },
  default: {
    color: 'blue',
  },
  small: {
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: '2px solid black',
      fontSize: 20,
      padding: '10px 8px',
      listStyle: 'none',
    },
  },
});

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.markAsRead = this.props.markAsRead.bind(this);
  }

  render() {
    if (this.props.value) {
      return (
        <li
          data-priority={this.props.type}
          className={css(
            this.props.type === 'urgent' ? styles.urgent : styles.default,
            styles.small,
          )}
          onClick={() => this.markAsRead(this.props.id)}
        >
          {this.props.value}
        </li>
      );
    }
    return (
      <li
        dangerouslySetInnerHTML={this.props.html}
        data-priority={this.props.type}
        className={css(
          this.props.type === 'urgent' ? styles.urgent : styles.default,
          styles.small,
        )}
        onClick={() => this.props.markAsRead(this.props.id)}
      ></li>
    );
  }
}

NotificationItem.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  html: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: function () {},
};

export default NotificationItem;
