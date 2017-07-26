import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Realtime communication with WebRTC</h1>
        <video
          className='video'
          autoPlay
          ></video>
      </div>
    );
  }
}

export default App;
