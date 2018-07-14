/** @flow */
/** 非同期的に動作するコードのテスト */

/** コールバックを利用するコード */
function fetchData(callback: Function): void {
  setTimeout(() => {
    callback('peanut butter');
  }, 100);
}

/*
 * 悪い例。fetchDataが完了した時点で
 * テストが完了してしまうので、コールバックが呼ばれない
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }
  fetchData(callback);
});
*/

test('the data is peanut butter', done => {
  expect.assertions(1); // アサーションが呼ばれたことを確認する
  function callback(data: string): void {
    expect(data).toBe('peanut butter');
    done();
  }
  fetchData(callback);
});

/** Promiseを利用するコード */
// resolveされるPromiseを返す関数
function fetchDataResolve(): Promise<string> {
  // Promiseがresolveされる場合
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 500);
  });
}

// resolveを期待する場合
test('the data is peanut butter Promise', () => {
  expect.assertions(1); // アサーションが呼ばれたことを確認する
  return fetchDataResolve().then(data => {
    expect(data).toBe('peanut butter');
  });
});

// expect宣言で.resolves matcherを使うこともできる
test('the data is peanut butter resolves', () => {
  expect.assertions(1);
  return expect(fetchDataResolve()).resolves.toBe('peanut butter');
});

// rejectされるPromiseを返す関数
function fetchDataReject(): Promise<Error> {
  // Promiseがrejectされる場合
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('fetch error'));
    }, 100);
  });
}

// rejectを期待する場合
test('the fetch fails with error', () => {
  expect.assertions(1); // アサーションが呼ばれたことを確認する
  return fetchDataReject().catch(e => {
    expect(e).toMatchObject({
      message: 'fetch error'
    });
  });
});

// expect宣言で.rejects matcherを使うこともできる
test('the fetch fails with rejects', () => {
  expect.assertions(1); // アサーションが呼ばれたことを確認する
  return expect(fetchDataReject()).rejects.toMatchObject({
    message: 'fetch error'
  });
});

/** Async/Awaitを使用したコード */
// resolveを期待する場合
test('the data is peanut butter with async/await', async () => {
  expect.assertions(1); // アサーションが呼ばれたことを確認する
  const data = await fetchDataResolve();
  expect(data).toBe('peanut butter');
});

// .resolves matcherを利用できる
test('the data is peanut butter with async/await and resolves', async () => {
  expect.assertions(1); // アサーションが呼ばれたことを確認する
  await expect(fetchDataResolve()).resolves.toBe('peanut butter');
});

// rejectを期待する場合
test('the fetch fails with async/await', async () => {
  expect.assertions(1); // アサーションが呼ばれたことを確認する
  try {
    await fetchDataReject();
  } catch (e) {
    expect(e).toMatchObject({
      message: 'fetch error'
    });
  }
});

// .rejects matcherを利用できる
test('the fetch fails with async/await and .rejects', async () => {
  expect.assertions(1); // アサーションが呼ばれたことを確認する
  await expect(fetchDataReject()).rejects.toMatchObject({
    message: 'fetch error'
  });
});
