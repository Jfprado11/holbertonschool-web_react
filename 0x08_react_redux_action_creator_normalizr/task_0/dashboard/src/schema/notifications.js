import data from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  const findData = data.filter((item) => item.author.id === userId);
  return findData.map((item) => item.context);
}
