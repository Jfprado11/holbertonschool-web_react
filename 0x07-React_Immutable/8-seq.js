import { Seq } from 'immutable';

export default function printBestStudents(obj) {
  const lazySeq = Seq(obj)
    .filter((item) => item.score >= 70)
    .map((item) => {
      item.firstName =
        item.firstName[0].toUpperCase() + item.firstName.slice(1).toLowerCase();
      item.lastName =
        item.lastName[0].toUpperCase() + item.lastName.slice(1).toLowerCase();
      return item;
    })
    .toObject();
  console.log(lazySeq);
}
