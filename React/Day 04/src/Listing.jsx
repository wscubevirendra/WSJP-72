import React, { useState } from 'react'

function Listing(props) {
    const [count, Setcount] = useState(1);

    function incHandler() {
        Setcount(count + 1)
    }

    function decHandler() {
        Setcount(count - 1)
    }

    return (
        <tr>
            <th scope="row">{props.num+1}</th>
            <td>
                <img width={50} src={props.image} alt="" />
            </td>
            <td>{props.title}</td>
            <td>{props.price}</td>
            <td className='d-flex gap-2'>
                <button onClick={incHandler} className='btn'>+</button>
                <h1>{count}</h1>
                <button onClick={decHandler} className='btn'>-</button>
            </td>
           
            <td>${Number(count*props.price).toLocaleString()}</td>
        </tr>
    )
}

export default Listing
