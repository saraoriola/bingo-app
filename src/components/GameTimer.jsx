import React from 'react';
import PropTypes from 'prop-types';

const GameTimer = ({ countdown }) => (
  <div>
    <p className="countdown">{countdown}</p>
    <p className="start-message">¡Que comience el juego!</p>
  </div>
);

GameTimer.propTypes = {
  countdown: PropTypes.number.isRequired,
};

export default GameTimer;
