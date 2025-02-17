import React, { useContext } from 'react'
import { MainContext } from './Context'

export default function E() {
    const { incHandler } = useContext(MainContext)
    return (
        <div>E
            <button onClick={incHandler}>+</button>
        </div>
    )
}
