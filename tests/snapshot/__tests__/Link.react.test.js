import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link.react';

it('正しくレンダリングされる', () => {
  const tree = renderer
    .create(<Link page="http://www.instagram.com">Instagram</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
