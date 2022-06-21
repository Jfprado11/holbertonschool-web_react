import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const deepMap = Map(object);
  return deepMap.getIn(array);
}
