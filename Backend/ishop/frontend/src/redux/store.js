import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './slice/adminSlice'
import cartSlice from './slice/cartSlice'
import userSlice from './slice/userSlice'

const store = configureStore({
    reducer: {
        admin: adminSlice,
        cart: cartSlice,
        user: userSlice
    },
})


export default store