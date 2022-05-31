import React from 'react';

function NotificationItem(props) {
  if (props.value) {
    return <li data-priority={props.type}>{props.value}</li>;
  }
  return (
    <li
      dangerouslySetInnerHTML={{ __html: props.html }}
      data-priority={props.type}
    ></li>
  );
}

export default NotificationItem;
