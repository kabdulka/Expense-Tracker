import { configureStore } from "@reduxjs/toolkit";

import budgetsReducer from "./features/Budgets/budgetsSlice";
import transactionsReducer from "./features/Transactions/TransactionsSlice";

export const store = configureStore({
    reducer: {
        budgets: budgetsReducer,
        transactions: transactionsReducer,
    }
});