import React from 'react';
import Transaction from '../Transaction/Transaction';

const TransactionList = ({transactions}) => {
    console.log(transactions)
    return (
        <section className="transaction-items">
            <h2> Transactions </h2>
            <ul className="transaction-list">
                {transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </section>
    );
}

export default TransactionList;