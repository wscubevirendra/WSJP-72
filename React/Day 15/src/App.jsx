import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/slice/counterSlice'

export default function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatcher = useDispatch()

  return (
    <div className='card'>
      <button onClick={()=>dispatcher(increment())}>+</button>
      <h1>{count}</h1>
      <button onClick={()=>dispatcher(decrement())}>-</button>
    </div>
  )
}
