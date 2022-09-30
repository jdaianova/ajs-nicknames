import Validator from '../validator';

test.each([
  ['test', true],
  ['test-123123-test', false],
  ['test_567-test', true],
  ['test1', false],
  ['2test', false],
  ['Test3_', false],
  ['12ghj-ghj', false],
])('validation', (name, expected) => {
  const result = new Validator(name);
  expect(result.validateUsername()).toEqual(expected);
});
