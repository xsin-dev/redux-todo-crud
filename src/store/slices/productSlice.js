import { createSlice } from "@reduxjs/toolkit";

const savedProducts = JSON.parse(localStorage.getItem("products")) || []

export const productSlice = createSlice({
    name: "products",
    initialState: {
        product: savedProducts,
    },
    reducers: {
        addProduct: (state, action) => {
            state.product = [action.payload, ...state.product]
            localStorage.setItem("products", JSON.stringify(state.product))
        },
        editProduct: (state, action) => {
            state.product = state.product.map((p) => p.id === action.payload.id ? action.payload : p)
            localStorage.setItem("products", JSON.stringify(state.product))
        },
        deleteProduct: (state, action) => {
            state.product = state.product.filter((p) => p.id !== action.payload)
            localStorage.setItem("products", JSON.stringify(state.product))
        },
    }
})

export const { addProduct, deleteProduct, editProduct } = productSlice.actions

export default productSlice.reducer