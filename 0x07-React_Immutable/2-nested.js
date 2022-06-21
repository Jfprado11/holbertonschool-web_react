import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  if (array.length <= 0) {
    return Map(object);
  }
  const value = array.reduce((prev, current, idx) => {
    if (idx === 0) return object[current];
    return prev[current];
  }, {});
  return value;
}
