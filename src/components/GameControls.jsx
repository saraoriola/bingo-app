// En GameControls.jsx
import React from 'react';
import PropTypes from 'prop-types';

const GameControls = ({ onStart, onPause }) => (
  <div>
    <button onClick={onStart}>Comenzar Partida</button>
    <button onClick={onPause}>Pausar</button>
  </div>
);

GameControls.propTypes = {
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
};

export default GameControls;
