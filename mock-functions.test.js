// @flow

function forEach(items, callback) {
  for (let index = 0; index < items.length; index += 1) {
    callback(items[index]);
  }
}

test('forEach test', () => {
  /** モック関数を利用する */
  const mockCallback = jest.fn();
  mockCallback
    .mockReturnValueOnce(42)
    .mockReturnValueOnce(21)
    .mockReturnValue(5);

  forEach([0, 1], mockCallback);

  // モック関数が二回呼ばれたか
  expect(mockCallback.mock.calls.length).toBe(2);

  // 最初の呼び出しの最初の引数は0か
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // 二度目の呼び出しの最初の引数は1か
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // 最初の呼び出しの戻り値は42か
  expect(mockCallback.mock.results[0].value).toBe(42);

  // 二度目の呼び出しの戻り値は21か
  expect(mockCallback.mock.results[1].value).toBe(21);
});
