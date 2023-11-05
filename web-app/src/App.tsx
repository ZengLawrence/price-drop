import React from 'react';
import './App.css';

function App() {
  const prodName = "RISE Nitro Cold Brew Coffee, 7 fl oz";
  return (
    <div className="App">
      <img
        src="https://m.media-amazon.com/images/I/81nCGMfSWiL._SL1500_.jpg"
        className="App-main-image"
        alt={prodName} />
      <h1>
        {prodName}
      </h1>
    </div>
  );
}

export default App;
