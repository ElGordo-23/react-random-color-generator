import './App.css';
import React from 'react';

export default App;
function App() {
  const randomHexColor = Math.floor(Math.random() * 16777215).toString(16);
  function refreshPage() {
    window.location.reload(false);
  }

  console.log(randomHexColor);
  return (
    <div className="App">
      <h1 style={{}}> Le Random Color Generator</h1>
      <div
        className="colorBox"
        style={{
          backgroundColor: `#${randomHexColor}`,
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
      <div>#{randomHexColor}</div>
      <button onClick={refreshPage}>Generate!</button>
    </div>
  );
}
