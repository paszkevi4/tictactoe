import React, {useState} from 'react'
import '../style.sass'
import { calculateWinner } from '../helpers'
import Board from './Board'

const Game = () => {

    let [board, setBoard] = useState(Array(9).fill(null))
    let [xIsNext, setXIsNext] = useState(false)
    let winner = calculateWinner(board)

    const handleClick = (i) => {
        let newBoard = [...board]
        if (winner || newBoard[i]) return
        newBoard[i] = xIsNext ? 'X' : 'O'
        setBoard(newBoard)
        setXIsNext(!xIsNext)

    }


    return (
        <Board squares={board} onClick={handleClick}/>
    )
}

export default Game