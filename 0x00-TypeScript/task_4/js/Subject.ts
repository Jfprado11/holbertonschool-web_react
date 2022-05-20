/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    constructor(public teacher: Teacher) {}

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
