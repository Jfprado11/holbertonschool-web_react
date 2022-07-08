import * as data from '../../notifications.json';
import { schema, normalize } from 'normalizr';

export default function getAllNotificationsByUser(userId) {
  const findData = data.default.filter((item) => item.author.id === userId);
  return findData.map((item) => item.context);
}

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizeData = normalize(data.default, [notification]);
