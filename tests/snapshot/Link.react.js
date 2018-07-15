// @flow

import * as React from 'react';

type Props = {
  page: string,
  children: React.Node
};

type State = {
  className: string
};

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
};

export default class Link extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      className: STATUS.NORMAL
    };
  }

  _onMouseEnter = () => {
    this.setState({ className: STATUS.HOVERED });
  };

  _onMouseLeave = () => {
    this.setState({ className: STATUS.NORMAL });
  };

  render() {
    const { page, children } = this.props;
    const { className } = this.state;
    return (
      <a
        className={className}
        href={page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {children}
      </a>
    );
  }
}
