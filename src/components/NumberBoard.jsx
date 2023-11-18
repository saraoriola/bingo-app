import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Table, Tbody, Tr, Td, Heading, Flex } from '@chakra-ui/react';

const NumberBoard = ({ numBalls }) => {
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
  <Flex
    width="100%"
    height="100%"
    align="center"
    justify="space-between"
  >
    <Flex
      flexDirection="column"
      margin="auto"
      align="center"
      justify="center"
    >
      <Box width="100%" textAlign="center" mb={2}>
        <Heading className='headingNum'>
          {lastNumber && <strong>{lastNumber}</strong>}
        </Heading>
      </Box>
      <Box width="100%" textAlign="center">
        <h4>
          <strong>Últimos 3 Números:</strong> {lastNumbers.join(', ')}
        </h4>
      </Box>
    </Flex>
    <Flex
      margin="auto"
      align="center"
      justify="center"
    >
      <Box>
        <Table>
          <Tbody>
            {rows.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                {row.map((number) => (
                  <Td
                    key={number}
                    border="1px"
                    borderColor="#98E8AB"
                    p="5px"
                    w={`${cellSize}px`}
                    h={`${cellSize}px`}
                    minW={`${cellSize}px`}
                    minH={`${cellSize}px`}
                    fontSize="28px"
                    textAlign={'center'}
                  >
                    {selectedNumbers.includes(number) ? number : ''}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  </Flex>
);


                };

NumberBoard.propTypes = {
  numBalls: PropTypes.number.isRequired,
};

export default NumberBoard;
