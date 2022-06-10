import React from 'react';
import PropTypes from 'prop-types';

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
