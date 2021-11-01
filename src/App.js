import './App.css';
import Game  from './components/game';
import React, { useEffect } from 'react';
function App() {

  useEffect(() => { document.title = "Dice Game" }, [])

  return (
    <div className="App">
      <Game></Game>
    </div>
  );
}

export default App;
