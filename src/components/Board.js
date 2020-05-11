import React from 'react'
import '../style.sass'
import Square from './Square'

const Board = ({onClick, squares}) => (
    <div className='board'>
        {squares.map( (square, i) => {
                return <Square key={i} value={square} onClick={() => onClick(i)} />
        })}
    </div>
)

export default Board