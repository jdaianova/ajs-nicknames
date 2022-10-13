import Validator from '../validator';

test.each([
  ['te123st', true],
  ['uyt-765654-kjh', false],
  ['test1', false],
  ['2test', false],
  ['Test3_', false],
  ['_Test3', false],
  ['Test-', false],
  ['-Test3', false],
  ['Test&^%_', false],
  ['_Test?)).', false],
])('validation', (name, expected) => {
  const result = new Validator(name);
  expect(result.validateUsername()).toEqual(expected);
});
