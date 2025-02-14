import React from 'react';

import { useDispatch } from 'react-redux';
import { removeTransaction } from '../../features/Transactions/TransactionsSlice';

const Transaction = ({transaction}) => {

    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeTransaction(transaction));
    }

    return (
        <li className="transaction-item">
            <span>
                {transaction.amount} - {transaction.category}
                <span className="transaction-description"> ( {transaction.description} ) </span>
            </span>
            <button
                className="remove-transaction-btn" 
                aria-label="Remove"
                onClick={handleRemove}
            > 
                X 
            </button>
        </li>
    );
}

export default Transaction;