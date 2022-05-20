export const cpp = Subjects.Cpp;
export const java = Subjects.Java;
export const react = Subjects.React;
export const cTeacher: Subjects.Teacher = {
  firstName: 'Prado',
  lastName: 'Prado',
  experienceTeachingC: 10,
};

console.log('C++');
const subC = new cpp(cTeacher);
console.log(subC.getRequirements());
console.log(subC.getAvailableTeacher());

console.log('Java');
const subJ = new java(cTeacher);
console.log(subJ.getRequirements());
console.log(subJ.getAvailableTeacher());

console.log('React');
const subR = new react(cTeacher);
console.log(subR.getRequirements());
console.log(subR.getAvailableTeacher());
