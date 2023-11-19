import React, { useState } from 'react';
import Bingo75 from './components/Bingo75';
import Bingo90 from './components/Bingo90';
import GameControls from './components/GameControls';
import { Box, Heading, Text, Button, Flex, Card } from '@chakra-ui/react';
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

  const handleRestartGame = () => {
    setSelectedBingo(null);
    setGameCountdown(0);
    setGamePaused(false);
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
          <Card
            shadow={'md'}
            className="bgImage75"
            borderRadius={'20px'}
            onClick={() => handleSelectBingo(75)}
            style={{
              background: 'linear-gradient(to bottom right, #4351CF, #7983DD)',
              width:'279px',
              height:'307px',
              overflow: 'hidden',
            }}
          >
            <Heading ml={6} mt={6} color={'#FFFFFF'}>75 bolas</Heading>
            <Text fontSize='sm' ml={6} mr={6} color={'#FFFFFF'}>Números del 1 al 75, patrones emocionantes. ¡Sé rápido y disfruta del juego!</Text>
            <img
              src="/src/assets/75bolas.png"
              alt="Imagen de fondo"
              style={{
                position: 'absolute',
                bottom: 0,
                top: '120px',
                left: '120px',
                width: '200px', 
                height: '200px', 
              }}
            />
          </Card>
            <Card 
              borderRadius={'20px'}
              shadow={'md'}
              className="bgImage90" ml={6} 
              onClick={() => handleSelectBingo(90)}
              style={{
              background: 'linear-gradient(to bottom right, #43CF84, #ABDD79)',
              width:'279px',
              height:'307px',
              overflow: 'hidden',

            }}
            >
              <Heading ml={6} mt={6} color={'#FFFFFF'}>90 bolas</Heading>
              <Text fontSize='sm' ml={6} mr={6} color={'#FFFFFF'}>Con 90 oportunidades, ¿quién será el primero en gritar ¡Bingo!?</Text>
               <img
              src="/src/assets/90bolas.png"
              alt="Imagen de fondo"
              style={{
                position: 'absolute',
                bottom: 0,
                top: '120px',
                left: '120px',
                width: '200px', 
                height: '200px', 
              }}
            />
            </Card>
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
