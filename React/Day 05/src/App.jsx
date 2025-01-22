import React, { useState, useRef } from 'react'

export default function App() {
  const [tudoList, settudoList] = useState([])
  const inpRef = useRef();

  const addTocart = () => {
    const value = inpRef.current.value;
    settudoList([...tudoList, value])
    inpRef.current.value = ""
  }

  function removeItem(delItem) {
    //1
    const newData = tudoList.filter((d, index) => {
      return index != delItem
    })
    settudoList(newData)

  }

  return (
    <div className='container'>
      <div className="input-group gap-2 mt-4 mb-3">
        <input ref={inpRef} type="text" className="form-control" placeholder="Add Tudo ...." aria-label="Username" aria-describedby="basic-addon1" />
        <span style={{
          cursor:"pointer"
        }} onClick={addTocart} className="input-group-text text-light bg-danger" id="basic-addon1">Add</span>
      </div>
      <List tudoList={tudoList} removeItem={removeItem} />
    </div>
  )
}



const List = (props) => {
  return (
    <ul class="list-group">
      {
        props.tudoList.length == 0 ?
          <h1 className='text-center'>Add List Here</h1>
          :
          props.tudoList.map(
            (data, index) => {
              return (
                <li key={index} className="list-group-item d-flex bg-secondary text-light justify-content-between align-items-center">
                  {data}
                  <span onClick={() => props.removeItem(index)} className="badge text-bg-primary rounded-pill">Delete</span>
                </li>
              )
            }
          )
      }
    </ul>
  )
}