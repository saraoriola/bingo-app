import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Table, Tbody, Tr, Td, Heading, Flex, Text, Grid, GridItem } from '@chakra-ui/react';

import number1 from '../assets/numbers/1.png';
import number2 from '../assets/numbers/2.png';
import number3 from '../assets/numbers/3.png';
import number4 from '../assets/numbers/4.png';
import number5 from '../assets/numbers/5.png';
import number6 from '../assets/numbers/6.png';
import number7 from '../assets/numbers/7.png';
import number8 from '../assets/numbers/8.png';
import number9 from '../assets/numbers/9.png';
import number10 from '../assets/numbers/10.png';
import number11 from '../assets/numbers/11.png';
import number12 from '../assets/numbers/12.png';
import number13 from '../assets/numbers/13.png';
import number14 from '../assets/numbers/14.png';
import number15 from '../assets/numbers/15.png';
import number16 from '../assets/numbers/16.png';
import number17 from '../assets/numbers/17.png';
import number18 from '../assets/numbers/18.png';
import number19 from '../assets/numbers/19.png';
import number20 from '../assets/numbers/20.png';
import number21 from '../assets/numbers/21.png';
import number22 from '../assets/numbers/22.png';
import number23 from '../assets/numbers/23.png';
import number24 from '../assets/numbers/24.png';
import number25 from '../assets/numbers/25.png';
import number26 from '../assets/numbers/26.png';
import number27 from '../assets/numbers/27.png';
import number28 from '../assets/numbers/28.png';
import number29 from '../assets/numbers/29.png';
import number30 from '../assets/numbers/30.png';
import number31 from '../assets/numbers/31.png';
import number32 from '../assets/numbers/32.png';
import number33 from '../assets/numbers/33.png';
import number34 from '../assets/numbers/34.png';
import number35 from '../assets/numbers/35.png';
import number36 from '../assets/numbers/36.png';
import number37 from '../assets/numbers/37.png';
import number38 from '../assets/numbers/38.png';
import number39 from '../assets/numbers/39.png';
import number40 from '../assets/numbers/40.png';
import number41 from '../assets/numbers/41.png';
import number42 from '../assets/numbers/42.png';
import number43 from '../assets/numbers/43.png';
import number44 from '../assets/numbers/44.png';
import number45 from '../assets/numbers/45.png';
import number46 from '../assets/numbers/46.png';
import number47 from '../assets/numbers/47.png';
import number48 from '../assets/numbers/48.png';
import number49 from '../assets/numbers/49.png';
import number50 from '../assets/numbers/50.png';
import number51 from '../assets/numbers/51.png';
import number52 from '../assets/numbers/52.png';
import number53 from '../assets/numbers/53.png';
import number54 from '../assets/numbers/54.png';
import number55 from '../assets/numbers/55.png';
import number56 from '../assets/numbers/56.png';
import number57 from '../assets/numbers/57.png';
import number58 from '../assets/numbers/58.png';
import number59 from '../assets/numbers/59.png';
import number60 from '../assets/numbers/60.png';
import number61 from '../assets/numbers/61.png';
import number62 from '../assets/numbers/62.png';
import number63 from '../assets/numbers/63.png';
import number64 from '../assets/numbers/64.png';
import number65 from '../assets/numbers/65.png';
import number66 from '../assets/numbers/66.png';
import number67 from '../assets/numbers/67.png';
import number68 from '../assets/numbers/68.png';
import number69 from '../assets/numbers/69.png';
import number70 from '../assets/numbers/70.png';
import number71 from '../assets/numbers/71.png';
import number72 from '../assets/numbers/72.png';
import number73 from '../assets/numbers/73.png';
import number74 from '../assets/numbers/74.png';
import number75 from '../assets/numbers/75.png';
import number76 from '../assets/numbers/76.png';
import number77 from '../assets/numbers/77.png';
import number78 from '../assets/numbers/78.png';
import number79 from '../assets/numbers/79.png';
import number80 from '../assets/numbers/80.png';
import number81 from '../assets/numbers/81.png';
import number82 from '../assets/numbers/82.png';
import number83 from '../assets/numbers/83.png';
import number84 from '../assets/numbers/84.png';
import number85 from '../assets/numbers/85.png';
import number86 from '../assets/numbers/86.png';
import number87 from '../assets/numbers/87.png';
import number88 from '../assets/numbers/88.png';
import number89 from '../assets/numbers/89.png';
import number90 from '../assets/numbers/90.png';
import number91 from '../assets/numbers/91.png';
import number92 from '../assets/numbers/92.png';
import number93 from '../assets/numbers/93.png';
import number94 from '../assets/numbers/94.png';
import number95 from '../assets/numbers/95.png';
import number96 from '../assets/numbers/96.png';
import number97 from '../assets/numbers/97.png';
import number98 from '../assets/numbers/98.png';
import number99 from '../assets/numbers/99.png';
import number100 from '../assets/numbers/100.png';
import GameControls from './GameControls';

const numberImages = {
  1: number1,
  2: number2,
  3: number3,
  4: number4,
  5: number5,
  6: number6,
  7: number7,
  8: number8,
  9: number9,
  10: number10,
  11: number11,
  12: number12,
  13: number13,
  14: number14,
  15: number15,
  16: number16,
  17: number17,
  18: number18,
  19: number19,
  20: number20,
  21: number21,
  22: number22,
  23: number23,
  24: number24,
  25: number25,
  26: number26,
  27: number27,
  28: number28,
  29: number29,
  30: number30,
  31: number31,
  32: number32,
  33: number33,
  34: number34,
  35: number35,
  36: number36,
  37: number37,
  38: number38,
  39: number39,
  40: number40,
  41: number41,
  42: number42,
  43: number43,
  44: number44,
  45: number45,
  46: number46,
  47: number47,
  48: number48,
  49: number49,
  50: number50,
  51: number51,
  52: number52,
  53: number53,
  54: number54,
  55: number55,
  56: number56,
  57: number57,
  58: number58,
  59: number59,
  60: number60,
  61: number61,
  62: number62,
  63: number63,
  64: number64,
  65: number65,
  66: number66,
  67: number67,
  68: number68,
  69: number69,
  70: number70,
  71: number71,
  72: number72,
  73: number73,
  74: number74,
  75: number75,
  76: number76,
  77: number77,
  78: number78,
  79: number79,
  80: number80,
  81: number81,
  82: number82,
  83: number83,
  84: number84,
  85: number85,
  86: number86,
  87: number87,
  88: number88,
  89: number89,
  90: number90,
  91: number91,
  92: number92,
  93: number93,
  94: number94,
  95: number95,
  96: number96,
  97: number97,
  98: number98,
  99: number99,
  100: number100,
};


const NumberBoard = ({ numBalls, onPause, onStart }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const allNumbers = Array.from({ length: numBalls }, (_, index) => index + 1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newNumber = Math.floor(Math.random() * numBalls) + 1;
      setSelectedNumbers((prevNumbers) => [...prevNumbers, newNumber]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [numBalls]);

  const getLastNNumbers = (n) => {
    const reversedNumbers = [...selectedNumbers].reverse();
    return reversedNumbers.slice(0, n);
  };

  const lastNumbers = getLastNNumbers(3);
  const lastNumber = lastNumbers[0];

  const cellSize = 50;
  const totalCells = 90;
  const cellsPerRow = 10;
  const rows = Array.from({ length: totalCells / cellsPerRow }, (_, rowIndex) =>
    allNumbers.slice(rowIndex * cellsPerRow, (rowIndex + 1) * cellsPerRow)
  );
return (
<Box className='boxBingo' 
padding={10}>

 <Grid
    templateColumns="30% 70%"  
    className='boxOut'
  >
    <GridItem pl='2' className='numberBox'>
      
       <Box textAlign="center" p={10}>
        {lastNumber && (
          <img
            src={numberImages[lastNumber]}
            alt={`Number ${lastNumber}`}
            style={{ width: '100%', height: '100%'}}
          />
        )}
      </Box>

          <Flex fontSize="lg" mt={4} justify="space-between" p={5}>
            {lastNumbers.map((number, index) => (
              <Box key={index} width="30%" height="30%">
                <img
                  src={numberImages[number]}
                  alt={`Number ${number}`}
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
            ))}
          </Flex>

    </GridItem>

    <GridItem pl='2'>
       <Table>
          <Tbody>
            {rows.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                {row.map((number) => (
                  <Td
                    key={number}
                    p="5px"
                    w={`${cellSize}px`}
                    h={`${cellSize}px`}
                    minW={`${cellSize}px`}
                    minH={`${cellSize}px`}
                    textAlign="center"
                  >
                    {selectedNumbers.includes(number) && (
                      <img
                        src={numberImages[number]}
                        alt={`Number ${number}`}
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                      />
                    )}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
  <GameControls/>
    </GridItem>
  </Grid>
</Box>
);
};

NumberBoard.propTypes = {
  numBalls: PropTypes.number.isRequired,
};

export default NumberBoard;
