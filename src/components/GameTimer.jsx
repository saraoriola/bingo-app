import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import handOne from '../assets/hands/uno.png';
import handTwo from '../assets/hands/dos.png';
import handThree from '../assets/hands/tres.png';

const numberHands = {
  1: handOne,
  2: handTwo,
  3: handThree,
};

const GameTimer = ({ countdown }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timeout;

    if (countdown === 0) {
      timeout = setTimeout(() => {
        setShowMessage(true);
      }, 5000); 
    } else {
      setShowMessage(false);
    }

    return () => clearTimeout(timeout);

  }, [countdown]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {countdown > 0 && countdown <= 3 && (
        <img
          src={numberHands[countdown]}
          alt={`Número ${countdown}`}
          style={{ width: '300px', height: '300px' }}
        />
      )}

      {showMessage && (
        <p className="start-message">¡Que comience el juego!</p>
      )}
    </div>
  );
};

GameTimer.propTypes = {
  countdown: PropTypes.number.isRequired,
};

export default GameTimer;
