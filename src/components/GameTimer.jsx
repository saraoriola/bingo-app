import React from 'react';
import PropTypes from 'prop-types';

const GameTimer = ({ countdown }) => (
  <div>
    <p>{countdown}</p>
    <p>¡Que comience el juego!</p>
  </div>
);

GameTimer.propTypes = {
  countdown: PropTypes.number.isRequired,
};

export default GameTimer;
