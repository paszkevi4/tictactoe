import React, { useState } from 'react'
import '../style.sass'

const Score = ({player, count}) => {
    let [name, setName] = useState(null)
    return (
        <>
            <div className='scoreName' onClick={() => setName(prompt())}><p>{name
                ? player ? name + ' plays for X' : name + ' plays for O'
                : 'Set your name'}</p></div>
            <div className='scoreCount'><p>{count}</p></div>
        </>
    )
}

export default Score