import Validator from '../validator';

test.each([
  ['test', true],
  ['uyt-765654-kjh', false],
  ['test_567-test', true],
  ['test1', false],
  ['2test', false],
  ['Test3_', false],
  ['_Test3', false],
  ['Test3-', false],
  ['-Test3', false],
  ['Test&^%_', false],
  ['_Test?)).', false],
  ['12ghj-ghj', false],
])('validation', (name, expected) => {
  const result = new Validator(name);
  expect(result.validateUsername()).toEqual(expected);
});
