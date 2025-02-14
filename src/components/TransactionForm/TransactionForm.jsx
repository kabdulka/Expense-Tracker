import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addTransaction } from '../../features/Transactions/TransactionsSlice';

const TransactionForm = ({categories}) => {

    const [category, setCategory] = useState(categories[0]);
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    const handleTransactionSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            category: category,
            description: description,
            amount: parseFloat(amount),
            id: uuidv4()
        }

        dispatch(addTransaction(newTransaction));
    };

    return (
        <section className="new-transaction-section">
            <h2> New Transaction </h2>
            <form className="new-transaction-form" onSubmit={handleTransactionSubmit}>
                <div className="form-input-container">
             
                    <div className="input-container category-container">
                        <label className="transaction-label" htmlFor="category">
                            Category
                        </label>
                        <select
                            id="category"
                            className="category-select"
                            value={category}
                            onChange={e => setCategory(e.currentTarget.value)}
                        >
                            <option>  
                                    Select a Category
                            </option>
                            {categories.map((c) => (
                                <option key={c} value={c}>  
                                    {c}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="input-container description-container">
                        <label className="transaction-label"> Description </label>
                        <input 
                            className="transaction-input"
                            id="description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="input-container amount-container">
                        <label className="transaction-label"
                            htmlFor="amount"
                        > 
                            Amount 
                        </label>
                        <input 
                            className="transaction-input"
                            id="amount"
                            type="number"
                            step="0.01"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                        />
                        
                    </div>
                </div>
                <button className="transaction-btn"> Add Transaction </button>
            </form>
        </section>
    );
}

export default TransactionForm;

