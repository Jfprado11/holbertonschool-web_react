import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('to get the full year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

test('to get the footer copy', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('last notification it is a string', () => {
  expect(typeof getLatestNotification()).toBe('string');
});
