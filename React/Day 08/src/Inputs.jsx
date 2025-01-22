import React from 'react'

export default function Inputs(props) {
    console.log(props)
    return (
        <input onChange={(e) => props.ChangeHandler(e.target.value)} type={props.type ?? "text"} className="form-control w-50 my-2 mx-auto" placeholder={props.placeHolder} />
    )
}
