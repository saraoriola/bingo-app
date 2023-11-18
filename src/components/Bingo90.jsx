import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NumberBoard from './NumberBoard';
import GameControls from './GameControls';
import GameTimer from './GameTimer';

const Bingo90 = ({ numBalls, onStart }) => {
  const [gameCountdown, setGameCountdown] = useState(3);
  const [gameInProgress, setGameInProgress] = useState(false);

  useEffect(() => {
    if (gameCountdown > 0) {
      const countdownInterval = setInterval(() => {
        setGameCountdown((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(countdownInterval);
    } else if (gameCountdown === 0 && !gameInProgress) {
      setGameInProgress(true);
      onStart();
    }
  }, [gameCountdown, gameInProgress, onStart]);

  return (
    <div>
      <h2>{numBalls} Bolas</h2>
      {gameCountdown > 0 && <GameTimer countdown={gameCountdown} />}
      {gameInProgress && <NumberBoard numBalls={numBalls} />}
      {gameInProgress && (
        <GameControls
          onStart={() => {}}
          onPause={() => {
            console.log('Juego en pausa');
          }}
        />
      )}
    </div>
  );
};

Bingo90.propTypes = {
  numBalls: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
};

export default Bingo90;
