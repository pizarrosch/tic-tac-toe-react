import {useState} from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard() {

  const [gameBoard, setGameBoard] = useState(initialGameboard);

  function handleSelectSquare(rowIndex, columnIndex) {
    setGameBoard((prevState) => {
      const updatedBoard = [...prevState.map(innerArray => [...innerArray])];
      updatedBoard[rowIndex][columnIndex] = 'X';
      return updatedBoard;
    });
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, columnIndex) => {
                return (
                  <li key={columnIndex}>
                    <button onClick={() => handleSelectSquare(rowIndex, columnIndex)}>{playerSymbol}</button>
                  </li>
                )
              })}
            </ol>
          </li>
        )
      })}
    </ol>
  )
}