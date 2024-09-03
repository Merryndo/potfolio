import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lamp from './components/Lamp';
import LightSwitch from './components/LightSwitch';


import './App.css';

function App() {
  const [lightOn, setLightOn] = useState(false);

  const turnOnLight = () => {
    setLightOn(true);
  };

  return (
    <Router>
      <div className="App">
        {!lightOn && <Lamp onClick={turnOnLight} />}
        {lightOn && (
          <Routes>
            <Route path="/" element={<Lamp onClick={turnOnLight} />} />
    
          </Routes>
        )}
        {!lightOn && <LightSwitch onClick={turnOnLight} />}
      </div>
    </Router>
  );
}

export default App;
