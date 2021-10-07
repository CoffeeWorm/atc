import atc from '../src';

test('resolve', async () => {
  const [reason, value] = await atc(Promise.resolve('value'));
  expect(reason).toBeUndefined();
  expect(value).toBe('value');
});

test('reject', async () => {
  const [reason, value] = await atc(Promise.reject('reason'));
  expect(reason).toBe('reason');
  expect(value).toBeUndefined();
});

test('reject error', async () => {
  const err = new Error('reason');
  const [reason, value] = await atc(Promise.reject(err));
  expect(reason).toBe(err);
  expect(value).toBeUndefined();
});
