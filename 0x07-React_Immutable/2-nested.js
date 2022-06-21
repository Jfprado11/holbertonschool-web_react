import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const deepMap = Map(object);
  const data = deepMap.getIn(array);
  if (typeof data !== 'string') return Map(data);
  return data;
}

console.log(
  accessImmutableObject(
    {
      name: {
        first: 'Guillaume',
        last: 'Salva',
      },
    },
    ['name'],
  ),
);
