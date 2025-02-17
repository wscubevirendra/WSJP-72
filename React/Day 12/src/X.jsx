import React, { useContext } from 'react'
import Y from './Y'
import { MainContext } from './Context'

export default function X() {
   const {count}= useContext(MainContext)
    return (
        <div>X---{count}
            <Y />
        </div>
    )
}
