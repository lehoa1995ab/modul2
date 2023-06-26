import React, { Component } from 'react';

export default class CoinFlip extends Component {
  constructor() {
    super();
    this.state = {
      result: null,
    };
  }

  handleFlip = () => {
    const randomResult = Math.random() < 0.5 ? 'Mặt sấp' : 'Mặt ngửa';
    this.setState({ result: randomResult });
  };

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        <button onClick={this.handleFlip}>Tung đồng xu</button>
        {this.state.result && <p>Kết quả: {this.state.result}</p>}
        {/* <img src={this.state.result} alt="Result" /> */}
      </div>
    );
  }
}

