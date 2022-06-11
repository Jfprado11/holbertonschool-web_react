import PropTypes from 'prop-types';
import React from 'react';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const styleRows = { backgroundColor: '' };

  if (isHeader) {
    styleRows.backgroundColor = '#deb5b545';
    if (textSecondCell === null) {
      return (
        <tr>
          <th style={styleRows} colSpan="2">
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr style={styleRows}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  }
  styleRows.backgroundColor = '#f5f5f5ab';
  return (
    <tr style={styleRows}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
