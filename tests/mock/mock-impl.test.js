import foo from './foo';

jest.mock('./foo'); // 自動モック

test('mock implementation', () => {
  const myMockFn = jest.fn(cb => cb(null, true));

  myMockFn((err, val) => console.log(val));
  myMockFn((err, val) => console.log(val));

  foo.mockImplementation(() => 42);
  console.log(foo()); // > 42

  // 複数回の関数呼び出しで異なる結果を生成する必要がある場合、
  // mockImplementationOnceメソッドを使用する
  const myMockFn2 = jest
    .fn()
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false));
  myMockFn2((err, val) => console.log(val)); // > true
  myMockFn2((err, val) => console.log(val)); // > false

  // mockImplementationOnceで定義された実装を使い果たした場合、
  // jest,fnで定義した実装を使います(定義されている場合)
  const myMockFn3 = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');
  console.log(myMockFn3(), myMockFn3(), myMockFn3(), myMockFn3());
  // > 'first call', 'second call', 'default', 'default'

  // thisを返す必要がある場合、糖衣構文が存在する
  const myObj = {
    myMethod: jest.fn().mockReturnThis()
  };
  // is the same
  const otherObj = {
    myMethod: jest.fn(function() {
      return this;
    })
  };

  // モック関数に名前を与えることができる
  const myMockFn4 = jest
    .fn()
    .mockReturnValue('default')
    .mockImplementation(scalar => 42 + scalar)
    .mockName('add42');
});
