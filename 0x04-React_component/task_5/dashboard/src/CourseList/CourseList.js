import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

import './CourseList.css';

import CourseListRow from './CourseListRow';

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" className="CourseList">
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
