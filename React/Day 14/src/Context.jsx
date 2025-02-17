import React, { createContext, useEffect, useState } from 'react'

const MainContext = createContext()
function Context(props) {
    const [user, SetUser] = useState()

    useEffect(
        () => {
            const user = localStorage.getItem("user");
            if (user != null) {
                SetUser(JSON.parse(user))
            }
        },
        []
    )

    function userHandler(data) {
        SetUser(data)
        localStorage.setItem("user", JSON.stringify(data))
    }

    function logoutHandler() {
        SetUser(null);
        localStorage.removeItem("user")
    }
    return (
        <MainContext.Provider value={{ user, userHandler,logoutHandler }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default Context
export { MainContext }
