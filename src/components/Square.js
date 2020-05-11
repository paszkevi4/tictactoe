import React from 'react'
import '../style.sass'

const Square = ({ onClick, value }) => (
    <button onClick={onClick}>
        {value}
    </button>
)

export default Square