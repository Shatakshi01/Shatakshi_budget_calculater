import React from 'react'
import Item from './ExpensesItems';

export const ExpensesList = ({expenses ,handleDelete, handleEdit,clearItems}) => {
    return (
        <div>
            <ul className='list'>
                {expenses.map((expense)=>{
                    return <Item 
                    key= {expense.id} 
                    expense= {expense}
                    handleDelete={handleDelete} 
                    handleEdit={handleEdit}/>
                })}
            </ul>
            {expenses.length > 0   &&
            <button className='clear-btn' onClick={clearItems}>
                CLEAR EXPENSES 
            </button>}
        </div>
    )
}

export default ExpensesList
