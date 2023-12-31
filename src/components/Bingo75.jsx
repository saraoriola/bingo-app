import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NumberBoard from './NumberBoard';
import GameTimer from './GameTimer';

const Bingo75 = ({ numBalls, onStart }) => {
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
      {gameCountdown > 0 && <GameTimer countdown={gameCountdown} />}
      {gameInProgress && <NumberBoard numBalls={numBalls} />}
    </div>
  );
};

Bingo75.propTypes = {
  numBalls: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
};

export default Bingo75;
