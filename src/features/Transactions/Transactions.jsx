import React from 'react';

import TransactionForm from '../../components/TransactionForm/TransactionForm';
import TransactionList from '../../components/TransactionList/TransactionList';

import { CATEGORIES } from '../../features/Budgets/budgetsSlice';

import { useSelector } from 'react-redux';
import { flattenedTransactions } from './TransactionsSlice';

const Transactions = () => {

    const transactions = useSelector(flattenedTransactions);
    console.log(transactions)

    return (
        <section className="transactions-container">
            <TransactionList transactions={transactions}/>
            <TransactionForm categories={CATEGORIES}/>
        </section>
    );
}

export default Transactions;