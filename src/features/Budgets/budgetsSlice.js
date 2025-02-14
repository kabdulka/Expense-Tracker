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
            // find the budget to edit
            // const newBudgets = state.budgets.map((budget) => {
            //     if (budget.category === action.payload.category) {
            //         return budget.amount = action.payload.amount
            //     }
            // })
            // return newBudgets;
            state.forEach((budget) => {
                if (budget.category === action.payload.category) {
                    console.log(typeof budget.amount)
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