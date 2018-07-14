import foo from './foo';

jest.mock('./foo'); // 自動モック

test('mock implementation', () => {
  const myMockFn = jest.fn(cb => cb(null, true));

  myMockFn((err, val) => console.log(val));
  myMockFn((err, val) => console.log(val));

  foo.mockImplementation(() => 42);
  console.log(foo());
});
