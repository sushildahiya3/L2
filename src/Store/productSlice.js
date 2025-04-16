import { createSlice} from '@reduxjs/toolkit'

/**
 * Setting up the intial state
 */
const initialState ={
    product:[]
}

/**
 * Creating the reducers and actions to mutate the store
 */
const productSlice = createSlice({name:'product',initialState,reducers:{
    add:(state, action) => {
            state.product.push(action.payload);
          }
    }
})

/**
 * Exporting the reducer and action
 */
export const productReducer = productSlice.reducer
export const {add}= productSlice.actions
export default productSlice