import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  if (props.value) {
    return <li data-priority={props.type}>{props.value}</li>;
  }
  return (
    <li dangerouslySetInnerHTML={props.html} data-priority={props.type}></li>
  );
}

NotificationItem.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  html: PropTypes.objectOf(PropTypes.string),
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
