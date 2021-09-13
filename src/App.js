import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());

  console.log(color);

  return (
    <div className="App">
      <h1 style={{}}> Le Random Color Generator</h1>
      <div
        className="colorBox"
        style={{
          backgroundColor: color,
          height: 300,
          width: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'thin solid black',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <div>{randomColor()}</div>
      <button onClick={() => setColor(randomColor.randomColor())}>
        Generate!
      </button>
    </div>
  );
}
