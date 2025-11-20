import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import todoSlice from './slices/todoSlice'
import productSlice from './slices/productSlice'

const store = configureStore({
    reducer: {
        counter: counterSlice,
        todos: todoSlice,
        products: productSlice,
    }
})

export default store