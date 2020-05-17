import React from 'react'
import '../style.sass'

const Score = ({name, count}) => (
    <>
        <div className='scoreName'><p>{name}</p></div>
        <div className='scoreCount'><p>{count}</p></div>
    </>
)

export default Score