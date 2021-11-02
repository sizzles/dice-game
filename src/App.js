import './App.css';
import Game  from './components/game';
import React, { useEffect } from 'react';
import {Footer} from './components/footer'
import { RollEngine } from './components/roll_engine';

function App() {

  useEffect(() => { document.title = "Dice Game" }, [])

  const seed = null;
  const rollEngine = new RollEngine(seed); 

  return (
    <div className="App">
      <Game rollEngine={rollEngine}></Game>
      <Footer></Footer>
    </div>
  );
}

export default App;
