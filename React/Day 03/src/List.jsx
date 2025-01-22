import { useState } from "react"

function List(props) {
    const [count, setCount] = useState(0);
    const [toggle, Settoggle] = useState(false);


    function incHandler() {
        setCount(count + 1)
    }

    function decHandler() {
        setCount(count - 1)
    }

    function toggleHandler(){
        Settoggle(!toggle)
    }


    return (
        <div style={{
            background:toggle==true ? "red" :""
        }} className="card">
            <button onClick={toggleHandler}>
                {
                    toggle==true ? "On"  : "Off"
                }
            </button>
            <button disabled={count >= 10 ? true : false} onClick={incHandler}>+</button>
            <h1>{count * props.price}</h1>
            <button disabled={count == 0 ? true : false} onClick={decHandler} >-</button>
        </div>
    )
}

export default List