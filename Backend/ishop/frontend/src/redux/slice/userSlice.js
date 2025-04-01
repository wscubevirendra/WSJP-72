import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        token: null
    },
    reducers: {
        login: (state, { payload }) => {
            state.data = payload.data
            state.token = payload.token
            localStorage.setItem("user", JSON.stringify(payload.data))
            localStorage.setItem("user-token", payload.token)
        },
        logOut(state) {
            state.data = null
            state.token = null
            localStorage.removeItem("user")
            localStorage.removeItem("user-toekn")

        },
        lsToUser(state) {
            const user = localStorage.getItem("user");
            const userToken = localStorage.getItem("user-token");
            if (user && userToken) {
                state.data = JSON.parse(user);
                state.token = userToken

            }

        }

    },
})

// Action creators are generated for each case reducer function
export const { login, logOut,lsToUser } = userSlice.actions

export default userSlice.reducer