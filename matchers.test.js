/** @flow */

/** 基本的なMacher */

// 値をテストします
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

// オブジェクトまたは配列のすべてのフィールドを再帰的にチェックします
test('object assignment', () => {
  const data: { one: number, two?: number } = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// Mathcerと反対のテストをします
test('adding positive numbers is not zero', () => {
  for (let a: number = 1; a < 10; a += 1) {
    for (let b: number = 1; b < 10; b += 1) {
      expect(a + b).not.toBe(0);
    }
  }
});

// null値の判定
test('null', () => {
  const n: null = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

// 0値の判定
test('zero', () => {
  const n: number = 0;
  expect(n).not.toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

// 数値の比較
test('two plus two', () => {
  const value: number = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // 数値の場合はtoBeとtoEqualは同じ振る舞いをします
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// 丸め誤差を含むテスト
// 浮動小数点の値の比較
test('adding floating point numbers', () => {
  const value: number = 0.1 + 0.2;
  // expect(value).toBe(0.3); これは丸め誤差エラーが発生する
  expect(value).toBeCloseTo(0.3); // 正しく動作する
});

// 正規表現によるマッチング
test('there is not I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but thene is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// 配列に特定のアイテムが含まれているかテストします
const shoppingList: string[] = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer'
];
test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});

// 例外が発生することをテストします
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}
test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});
