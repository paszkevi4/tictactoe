import React, {useState} from 'react'
import '../style.sass'
import { calculateWinner } from '../helpers'
import Board from './Board'

const Game = () => {

    let [history, setHistory] = useState([Array(9).fill(null)])
    let [step, setStep] = useState(0)
    let [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(history[step])

    const handleClick = (i) => {
        const newHistory = [...history[step]]
        if (winner || newHistory[i]) return
        newHistory[i] = xIsNext ? 'X' : 'O'
        setHistory([...history, newHistory])
        setStep(history.length)
        setXIsNext(!xIsNext)
    }


    const restartGame = () => (
        <button className={restartGame} onClick={ () => setHistory([Array(9).fill(null)]) }>
            restart
        </button>
    )

    return (
        <div>
            <Board squares={history[step]} onClick={handleClick}/>
            <p>{winner ? 'The winner is ' + winner : 'Next player is: ' + (xIsNext ? 'X' : 'O' )}</p>
            {restartGame}
            <button onClick={() => console.log(history)}></button>
        </div>
    )
}

export default Game