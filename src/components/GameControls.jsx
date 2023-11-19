// GameControls.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

const GameControls = ({ onPause, onRestart }) => (
  <div>
    <Button onClick={onPause}>Pausar juego</Button>
    <Button onClick={onRestart}>Volver a empezar</Button>
  </div>
);

GameControls.propTypes = {
  onPause: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default GameControls;
