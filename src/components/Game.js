import React, {useState, useEffect} from 'react'
import '../style.sass'
import { calculateWinner } from '../helpers'
import Board from './Board'
import {ScoreBoard} from './ScoreBoard'


const Game = () => {

    let [history, setHistory] = useState([Array(9).fill(null)])
    let [step, setStep] = useState(0)
    let [xIsNext, setXIsNext] = useState(true)

    let [winners, setWinners] = useState([])
    let [countX, setCountX] = useState(0)
    let [countO, setCountO] = useState(0)
    //check if there is winner for every move
    const winner = calculateWinner(history[step])
    let [draw, setDraw] = useState(false)
    //score setter
    useEffect (() => {
        if (winner == 'X') {
            setCountX(++countX)
            setXIsNext(true)
        }
        if (winner == 'O') {
            setCountO(++countO)
            setXIsNext(false)
        }
    }, [winner])

    //display X or O depending on click
    const handleClick = (i) => {
        const current = history.slice(0, step+1)
        const newHistory = [...current[step]]
        if (winner || newHistory[i]) return
        newHistory[i] = xIsNext ? 'X' : 'O'
        setHistory([...current, newHistory])
        setStep(current.length)
        setXIsNext(!xIsNext)
        if (history.length == 9) {
            setDraw(true)
            setCountX(++countX)
            setCountO(++countO)
        }
    }

    //revents last step
    const returnMove = () => {
        setStep(step > 0 ? --step : step)
        setXIsNext(!xIsNext)
    }

    //clears board, gives your opponent a point
    const Xconceded = () => {
        setCountO(++countO)
        restart()
    }
    const Oconceded = () => {
        setCountX(++countX)
        restart()
    }

    //clears the bord
    const restart = () => {
        setHistory([Array(9).fill(null)])
        setStep(0)
    }

    return (
        <div>
            {/*<p>{winner ? 'The winner is ' + winner : 'Next player is: ' + (xIsNext ? 'X' : 'O' )}</p>
            <button onClick={() => console.log(step, draw)}>123</button>*/}
            <div className='mobileScoreBoard X'>
                <ScoreBoard name={'X'} restart={restart} returnMove={returnMove}
                            count={countX} winner={winner} draw={draw} concede={Xconceded}/>
            </div>
            <Board squares={history[step]} onClick={handleClick}/>
            <div className='commonScoreBoard'>
                <ScoreBoard name={'X'} restart={restart} returnMove={returnMove}
                            count={countX} winner={winner} draw={draw} concede={Xconceded}/>
                <ScoreBoard name={'O'} restart={restart} returnMove={returnMove}
                            count={countO} winner={winner} draw={draw} concede={Oconceded}/>
            </div>
            <div className='mobileScoreBoard'>
                <ScoreBoard name={'O'} restart={restart} returnMove={returnMove}
                            count={countO} winner={winner} draw={draw} concede={Oconceded}/>
            </div>
        </div>
    )
}

export default Game