import React from 'react'
import '../style.sass'

const Square = ({ onClick, value }) => (
    <button className='square' onClick={onClick}>
        {value}
    </button>
)

export default Square