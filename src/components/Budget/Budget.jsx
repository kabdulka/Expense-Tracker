import {useState} from 'react';

import {useSelector, useDispatch} from "react-redux"; 
import { editBudget } from '../../features/Budgets/budgetsSlice';
import { selectTransactions } from '../../features/Transactions/TransactionsSlice';

const Budget = ({budget}) => {

    const [amount, setamount] = useState(budget.amount);

    const dispatch = useDispatch();
    const transactions = useSelector(selectTransactions); 

    const calculatetotalExpenses = () => {
        return transactions[budget.category]
            .map(transaction => transaction.amount)
            .reduce((amount1, amount2) => amount1 + amount2, 0);
    }
    // console.log(calculatetotalExpenses())

    const handleamountChange = (e) => {
        setamount(e.currentTarget.value)
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        dispatch(editBudget({amount, category: budget.category}));
        //{amount: amount, category: budget.category}
    }

    const fundsRemaining = (!budget.amount ? 0 : Number.parseFloat(budget.amount)) - calculatetotalExpenses();
    // console.log(fundsRemaining)

    const getfundsRemainingClassName = (amount) => {
        if (parseFloat(amount) === 0) {
            return null
        }

        return parseFloat(amount) > 0 ? "--positive" : "--negative"
    }

    const fundsRemainingClassName = getfundsRemainingClassName(fundsRemaining);

    return (
        <li className="budget-container">
            <h3 className="budget-category-label"> Category </h3>
            <form className="budget-form" onSubmit={handleEditSubmit}>
                <label className="amount-label" htmlFor="amount-label"> {budget.category} </label>
                <div className="amount-wrapper">
                    <input 
                        className="amount-input" 
                        id="amount-input" 
                        type="number"
                        step="0.01"
                        value={amount} 
                        onChange={handleamountChange}
                    />
                    <button className="update-btn">
                        Update
                    </button> 
                </div>
            </form>
            
            <h4 className={`funds-remaining-value funds-remaining-value${fundsRemainingClassName}`}> Funds Remaining: {fundsRemaining} </h4>
         
        </li>
    );
}

export default Budget;