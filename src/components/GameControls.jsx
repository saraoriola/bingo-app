import React from 'react';
import PropTypes from 'prop-types';

const GameControls = ({ onPause }) => (
  <div>
    <button onClick={onPause}>Pausar</button>
  </div>
);

GameControls.propTypes = {
  onPause: PropTypes.func.isRequired,
};

export default GameControls;
