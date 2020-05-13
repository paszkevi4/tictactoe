import React from 'react'
import '../style.sass'

export const ScoreBoard = ({name, restart, returnMove, count, winner, draw, concede}) => (
        <div className='scoreBordInner'>
            <div className='scoreBordData'>
                <button>you are playing for {name}</button>
                {winner
                    ? <button onClick={ () => restart() }>next round</button>
                    : draw
                        ? <button onClick={ () => restart() }>next round</button>
                        :<button onClick={ () => returnMove() }>return move</button>
                }
                <button onClick={ () => concede() }>concede</button>
            </div>
            <button>{count}</button>
        </div>
)
