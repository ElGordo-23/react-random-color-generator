import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());

  return (
    <div className="App">
      <h1
        className="Headline"
        style={{
          color: color,
          marginTop: 30,
        }}
      >
        Le Random Color Generator
      </h1>
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
          marginTop: 30,
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          padding: 10,
          fontFamily: 'Helvetica',
        }}
      >
        {randomColor()}
      </div>
      <button
        style={{
          width: 150,
          fontStyle: 'italic',
          fontWeight: 'bold',
        }}
        onClick={() => setColor(randomColor.randomColor())}
      >
        Generate!
      </button>
    </div>
  );
}
