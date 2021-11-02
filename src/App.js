import './App.css';
import Game  from './components/game';
import React, { useEffect } from 'react';
import {Footer} from './components/footer'

function App() {

  useEffect(() => { document.title = "Dice Game" }, [])
  return (
    <div className="App">
      <Game></Game>
      <Footer></Footer>
    </div>
  );
}

export default App;
