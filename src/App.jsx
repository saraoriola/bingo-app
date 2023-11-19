import React, { useState } from 'react';
import Bingo75 from './components/Bingo75';
import Bingo90 from './components/Bingo90';
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import './App.scss';

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
    <Box>
      {selectedBingo === null ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Heading>Roll & Win</Heading>
          <Text mt={8} fontSize="xl"           
          textAlign="center"
          justifyContent="center">
            ¡La diversión comienza aquí! ¿Estás listo para ganar? <br />
            Haz clic en "Empezar a Jugar" para seleccionar tu tipo de Bingo.
          </Text>
            <Button
              paddingLeft={8}
              paddingRight={8}
              backgroundColor={'#ECC94B'}
              borderRadius={'20px'}
              mt={6}
              shadow={'md'}
              transition="all 0.3s"
              _hover={{
                backgroundColor: 'transparent',
                border: '1px solid #ECC94B',                
                color: '#ECC94B',
              }}
              onClick={() => handleSelectBingo(0)}
            >
              Empezar a Jugar
            </Button>
        </Box>
      ) : selectedBingo === 0 ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          Selecciona tu tipo de Bingo
          <Flex mt={6}>
            <Button 
              shadow={'md'}
              className="bgImage75" 
              onClick={() => handleSelectBingo(75)}>
              <Heading>75 bolas</Heading>
            </Button>
            <Button 
              shadow={'md'}
              className="bgImage90" ml={6} 
              onClick={() => handleSelectBingo(90)}>
              <Heading>90 bolas</Heading>
            </Button>
          </Flex>
        </Box>
      ) : selectedBingo === 75 ? (
        <Bingo75
          numBalls={75}
          onStart={handleStartGame}
          onPause={handlePauseGame}
        />
      ) : (
        <Bingo90
          numBalls={90}
          onStart={handleStartGame}
          onPause={handlePauseGame}
        />
      )}
    </Box>
  );
};

export default App;
