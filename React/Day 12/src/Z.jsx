import React, { useContext } from 'react'
import { MainContext } from './Context'

export default function Z() {
    const { count } = useContext(MainContext)
    return (
        <div>Z---{count}</div>
    )
}
