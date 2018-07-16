import lodash from 'lodash';

// コアモジュールではないので、
// 自動でマニュアルモックが使われる

test('if lodash head is mocked', () => {
  expect(lodash.head([2, 3])).toEqual(5);
});
