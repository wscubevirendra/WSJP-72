import React, { createContext, useState } from 'react'

const MainContext = createContext()
function Context(props) {
    const [count, Setcount] = useState(20)

    function incHandler() {
        Setcount(count + 1)
    }
    return (
        <MainContext.Provider value={{ count, incHandler }}>
            {props.children}
        </MainContext.Provider >
    )
}


export default Context

export { MainContext }
