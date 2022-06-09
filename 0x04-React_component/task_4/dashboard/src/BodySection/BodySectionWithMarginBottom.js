import React from 'react';
import PropTypes from 'prop-types';

import './BodySection.css';

import BodySection from './BodySection';

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection title={this.props.title}>
          {this.props.children}
        </BodySection>
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default BodySectionWithMarginBottom;
