import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();

    this.state = { seconds: Date.now() / 1000 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      seconds: Date.now() / 1000
    });
  }

  render() {
    const { seconds } = this.state;
    // eslint-disable-next-line react/jsx-one-expression-per-line
    return <p>{seconds} seconds have ellapsed since the UNIX epoch.</p>;
  }
}
