import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = [
    "housing",
    "food",
    "transportation",
    "utilities",
    "clothing",
    "healthcare",
    "personal",
    "education",
    "entertainment",
];

const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []])); 

const options = {
    name: "transactions",
    initialState: initialState,
    reducers: {
        addTransaction: (state, action) => {
            const {category} = action.payload;
            console.log(category)
            state[category].push(action.payload);
        },
        removeTransaction: (state, action) => {
            const {category} = action.payload;
            state[category] = state[category].filter(transaction => transaction.id !== action.payload.id);
        }
    }
}

// export const selectFlattenedTransactions = (state) =>
//   Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);
export const selectTransactions = (state) => state.transactions;
export const flattenedTransactions = (state) => Object.values(state.transactions).flat();

const transactionsSlice = createSlice(options);
export const {addTransaction, removeTransaction} = transactionsSlice.actions;
export default transactionsSlice.reducer;

