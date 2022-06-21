import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const deepMap = Map(object);
  const data = deepMap.getIn(array);
  return data;
}
