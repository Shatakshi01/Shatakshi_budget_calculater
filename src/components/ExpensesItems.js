import React from 'react'

export const ExpensesItems = ({expense, handleDelete, handleEdit}) => {
    const {id, charge, amount }= expense
    return (
        <li>
            <div className='info'>
                <span className='expense'>{charge}</span>
                <span className='amount'>Rs. {amount}</span>
            </div>
            <div>
                
            </div>
        </li>
    );
}

export default ExpensesItems



