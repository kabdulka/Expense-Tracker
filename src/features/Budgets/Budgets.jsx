import React from 'react';

import { useSelector } from 'react-redux';
import Budget from '../../components/Budget/Budget';

const Budgets = () => {
    const budgets = useSelector(state => state.budgets);
    return (
        <ul>
            {
                budgets.map((budget) => (
                    <Budget key={budget.category} budget={budget}/>
                ))
            }
        </ul>
    )
}

export default Budgets; 