const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard() {
  return (
    <ol id='game-board'>
      {initialGameboard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, playerSymbolIndex) => {
                return (
                  <li key={playerSymbolIndex}>
                    <button>{playerSymbol}</button>
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