import { NavLink } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <NavLink to="hangman">
        <button className='my-button'>Go to HangMan</button>
      </NavLink>
      <NavLink to="tictactoe">
        <button className='my-button'>Go to TicTacToe</button>
      </NavLink>
      <NavLink to="simon">
        <button className='my-button'>Go to Simon</button>
      </NavLink>
    </>
  )
}

export default App
