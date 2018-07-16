/*
it('毎回失敗する', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James'
  };
  expect(user).toMatchSnapshot();
}); */

it('matcherがチェックされテストがパスされる', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James'
  };
  // 非対称Macherを使い、スナップショット作成前にチェックされる
  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number)
  });
});
