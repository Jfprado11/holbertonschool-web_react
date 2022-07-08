import PropTypes from 'prop-types';
import React from 'react';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  rowsHead: {
    backgroundColor: '#deb5b545',
  },
  rows: {
    backgroundColor: '#f5f5f5ab',
  },
  th: {
    borderBottom: '2px solid grey',
    padding: 10,
    textAlign: 'center',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checkBoxBool, setCheckBoxBool] = React.useState(false);

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(styles.rowsHead)}>
          <th className={css(styles.th)} colSpan="2">
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr className={css(styles.rowsHead)}>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </tr>
      );
    }
  }
  return (
    <tr className={css(checkBoxBool ? styles.rowChecked : styles.rows)}>
      <td>
        <input
          type="checkbox"
          checked={checkBoxBool}
          onChange={() => setCheckBoxBool(!checkBoxBool)}
        />
        {textFirstCell}
      </td>
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
