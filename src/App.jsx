import Player from './components/Player.jsx';
import GameBoard from "./components/GameBoard.jsx";

function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player symbol='X'>Player 1</Player>
          <Player symbol='O'>Player 2</Player>
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
