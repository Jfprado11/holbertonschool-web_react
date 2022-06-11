import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

import './CourseList.css';
import { StyleSheet, css } from 'aphrodite';

import CourseListRow from './CourseListRow';

const styles = StyleSheet.create({
  courseList: {
    height: 300,
    textAlign: 'left',
    border: '2px solid grey',
    margin: '0 auto',
    width: '90%',
  },
});

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <tr>
            <td>No course available yet</td>
          </tr>
        ) : (
          listCourses.map((course) => {
            return (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isHeader={false}
              />
            );
          })
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
