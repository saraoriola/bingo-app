// En App.jsx
import React, { useState } from 'react';
import './App.scss';
import Bingo75 from './components/Bingo75';
import Bingo90 from './components/Bingo90';

const App = () => {
  const [selectedBingo, setSelectedBingo] = useState(null);
  const [gameCountdown, setGameCountdown] = useState(0);
  const [gamePaused, setGamePaused] = useState(false);

  const handleSelectBingo = (numBalls) => {
    setSelectedBingo(numBalls);
  };

  const handleStartGame = () => {
    setGameCountdown(3);

    const countdownInterval = setInterval(() => {
      setGameCountdown((prevCount) => prevCount - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      setGameCountdown(0);
    }, 4000);
  };

  const handlePauseGame = () => {
    setGamePaused(!gamePaused);
  };

  return (
    <div className="App">
      <h1>Bingo Game</h1>

      {selectedBingo === null ? (
        <div>
          <button onClick={() => handleSelectBingo(75)}>75 Bolas</button>
          <button onClick={() => handleSelectBingo(90)}>90 Bolas</button>
        </div>
      ) : (
        selectedBingo === 75 ? (
          <Bingo75
            numBalls={75}
            onStart={handleStartGame}
            onPause={() => handlePauseGame()}
          />
        ) : (
          <Bingo90
            numBalls={90}
            onStart={handleStartGame}
            onPause={() => handlePauseGame()}
          />
        )
      )}

      {selectedBingo !== null && (
        <div>
          {/* Aquí puedes mostrar información adicional si es necesario */}
        </div>
      )}
    </div>
  );
};

export default App;
