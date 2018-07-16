// lodashのマニュアルモック
// node_modulesに近接する__mocks__へ書く

const lodash = jest.genMockFromModule('lodash');

lodash.head = arr => 5;

export default lodash;
