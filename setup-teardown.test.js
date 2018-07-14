// @flow

let cityList: string[] = [];

function initializeCityDatabase() {
  cityList = ['Vienna', 'San Juan'];
}

function clearCityDatabase() {
  cityList = [];
}

function isCity(name: string): boolean {
  return cityList.includes(name);
}

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
