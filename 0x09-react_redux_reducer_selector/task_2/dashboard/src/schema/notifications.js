import * as data from '../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizeData = normalize(data.default, [notification]);

export default function getAllNotificationsByUser(userId) {
  const arr = [];
  for (let note in normalizeData.entities.notifications) {
    const data = normalizeData.entities.notifications[note];
    if (data.author === userId) {
      const id = data.context;
      arr.push(normalizeData.entities.messages[id]);
    }
  }
  return arr;
}
