import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/Accordion';
import { OnOff } from './components/OnOff';

function App() {
  return (
    <div className="App">
     <Accordion collapsed={false}/>
     <Accordion collapsed={false} />
     <OnOff turned={true} />
    </div>
  );
}

export default App;
