// En NumberBoard.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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

  return (
    <div>
      <h3>Números</h3>
      <ul>
        <li style={{ fontSize: '24px' }}>
          {lastNumber && <strong>{lastNumber}</strong>}
        </li>
      </ul>
      <h4>
        <strong>Últimos 3 Números:</strong> {lastNumbers.join(', ')}
      </h4>

      <h3>Tabla de Números</h3>
      <table>
        <tbody>
          {allNumbers.reduce((rows, number, index) => {
            if (index % 10 === 0) {
              rows.push([]);
            }
            rows[rows.length - 1].push(
              <td key={index} style={{ border: '1px solid black', padding: '5px' }}>
                {selectedNumbers.includes(number) ? number : ''}
              </td>
            );
            return rows;
          }, []).map((row, rowIndex) => (
            <tr key={rowIndex}>{row}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

NumberBoard.propTypes = {
  numBalls: PropTypes.number.isRequired,
};

export default NumberBoard;
