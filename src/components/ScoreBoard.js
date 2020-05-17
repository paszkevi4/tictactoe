import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import '../style.sass'

export const ScoreBoard = ({restart, returnMove, winner, draw, concede, xIsNext, player}) => {
    return (
        <div className={'controllers' + ' ' + `${player ? player : ' '}`} >
            <div className='controllerButtons'>
                {winner
                    ? <Button variant="success" onClick={() => restart()}>next round</Button>
                    : draw
                        ? <Button variant="success" onClick={() => restart()}>next round</Button>
                        : <Button variant="primary" onClick={!player === xIsNext ? () => returnMove() : null}>return move</Button>
                }
                <Button variant="danger" onClick={  () => concede() }>Concede</Button>
            </div>
            {player === 'X'
                ? <div className='controllerVictory'>
                    {winner
                        ? winner == player
                            ? <div className='controllerVictoryWin'>WIN</div>
                            : <div className='controllerVictoryLose'>LOSE</div>
                        : null
                    }
                </div>
                : <div className='controllerVictory'>
                    {winner
                        ? winner == player
                            ? <div className='controllerVictoryWinO'>WIN</div>
                            : <div className='controllerVictoryLoseO'>LOSE</div>
                        : null
                    }
                </div>
            }



        </div>
    )
}
