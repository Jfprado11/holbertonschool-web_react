interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Felipe',
  lastName: 'Prado',
  age: 19,
  location: 'Colombia',
};
const student2: Student = {
  firstName: 'Sebas',
  lastName: 'Maru',
  age: 19,
  location: 'Colombia',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const rowHead = document.createElement('tr');
rowHead.insertAdjacentHTML(
  'afterbegin',
  `
    <th>firstName</th>
    <th>lastName</th>
    <th>Age</th>
    <th>location</th>
`,
);
thead.appendChild(rowHead);

const tbody = document.createElement('tbody');
studentsList.forEach((student) => {
  const data = `
    <tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.location}</td>
    </tr>
    `;
  tbody.insertAdjacentHTML('beforeend', data);
});

table.appendChild(thead);
table.appendChild(tbody);
const body = document.querySelector('body');
body.appendChild(table);
