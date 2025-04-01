import { createSlice } from '@reduxjs/toolkit'

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    data: null,
    token: null
  },
  reducers: {
    login: (state, { payload }) => {
      state.data = payload.data
      state.token = payload.token
      localStorage.setItem("admin", JSON.stringify(payload.data))
      localStorage.setItem("admin-token", payload.token)
    },
    logOut(state) {
      state.data = null
      state.token = null
      localStorage.removeItem("admin")
      localStorage.removeItem("admin-token")

    }

  },
})

// Action creators are generated for each case reducer function
export const { login, logOut } = adminSlice.actions

export default adminSlice.reducer