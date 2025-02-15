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

const initialState = CATEGORIES.map((category) => ({
    amount: 0,
    category: category,
}));

const options = {
    name: "budgets",
    initialState: initialState,

    reducers: {

        editBudget: (state, action) => {
            state.forEach((budget) => {
                if (budget.category === action.payload.category) {
                    budget.amount = action.payload.amount
                }
            });
            return state;
        }
    }
}

export const budgetsSlice = createSlice(options);
export const {editBudget} = budgetsSlice.actions;
export default budgetsSlice.reducer;