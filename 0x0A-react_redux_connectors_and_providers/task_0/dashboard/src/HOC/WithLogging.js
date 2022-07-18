import React from 'react';

import PropTypes from 'prop-types';

const WithLogging = (ComponentWrapped) => {
  let nameClass = '';
  if (ComponentWrapped.name) {
    nameClass = ComponentWrapped.name;
  } else {
    nameClass = 'Component';
  }

  return class extends React.Component {
    static propTypes = {
      displayName: PropTypes.bool,
    };

    static defaultProps = {
      displayName: true,
    };

    componentDidMount() {
      console.log(`Component ${nameClass} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${nameClass} is going to unmount`);
    }
    render() {
      return <ComponentWrapped />;
    }
  };
};

export default WithLogging;
