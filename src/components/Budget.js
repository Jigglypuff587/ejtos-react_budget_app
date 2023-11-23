import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000)
        {
            alert("The budget cannot exceed £20,000");
        } 
        else if(event.target.value < totalExpenses)
        {
            alert("You cannot reduce the budget value lower than the spending.")   
        }
        else
        {
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            });
        }

    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
