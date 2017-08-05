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
        <h3>Click below to change the resolution</h3>
        <button className='qVga'>qVga</button>
        <button className='Vga'>Vga</button>
        <button className='hd'>hd</button>
        <video
          className='video'
          autoPlay
          ></video>
        <button className='takepic'>Take a photo</button>
        <canvas></canvas>
      </div>
    );
  }
}

export default App;
