import { createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
    name: 'customerInfo',
    initialState: {
        customers: [],
        isError: false,
        message: "",
        pageNumber: 1
    },
    reducers: {
        increment: state => {
            state.pageNumber += 1;
        },
        decrement: state => {
            state.pageNumber -= 1;
        },
        setPersistedPageNumber: (state, action) => {
            state.pageNumber = action;
        },
    },
});

export const { increment, decrement, setPersistedPageNumber } = counterSlice.actions;

export const selectPageNumber = state => {
    return state.customerInfo.pageNumber.payload
};

export default counterSlice.reducer;
