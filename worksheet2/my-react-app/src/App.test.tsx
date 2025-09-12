test('2 + 2 equals 4', () => {
  expect(2 + 2).toBe(4);
});
test.skip('This one should fail', () => {
  expect(2 + 2).toBe(5);
});
