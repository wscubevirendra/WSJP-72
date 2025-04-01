import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        total: 0,
        originalTotal: 0
    },
    reducers: {
        addToCart: (state, { payload }) => {
            const product = state.data.find((d) => d.productId === payload.productId)
            if (product) {
                product.qty++
            } else {
                state.data.push({ productId: payload.productId, qty: 1 })
            }

            state.total += payload.finalPrice;
            state.originalTotal += payload.originalPrice;
            localStorage.setItem("cart-data", JSON.stringify(state.data));
            localStorage.setItem("total", state.total);
            localStorage.setItem("originalTotal", state.originalTotal);



        },
        emptyCart(state) {
            state.data=[];
            state.total=0;
            state.originalTotal=0;
            localStorage.removeItem("cart-data");
            localStorage.removeItem("total");
            localStorage.removeItem("originalTotal");

        },
        lsToCart(state) {
            const cartData = localStorage.getItem("cart-data");
            const total = localStorage.getItem("total");
            const originalTotal = localStorage.getItem("originalTotal");
            if (cartData) {
                state.data = JSON.parse(cartData);
                state.total = Number(total);
                state.originalTotal = Number(originalTotal);

            }

        }

    },
})

// Action creators are generated for each case reducer function
export const { addToCart, emptyCart, lsToCart } = cartSlice.actions

export default cartSlice.reducer