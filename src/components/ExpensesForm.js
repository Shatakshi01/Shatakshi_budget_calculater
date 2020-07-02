import React from 'react'

export const ExpensesForm = ({
    charge, amount, 
    handleAmount,
     handleSubmit, 
    handleCharge}) => {
    return <form onSubmit={handleSubmit}>
        <div className='form-center'>
        <div className='form-group'>
        <label htmlFor='charge'>charge</label>
        <input 
        type= 'text' 
        className='form-control'
        id='charge'
        name='charge'
        placeholder='eg. Rent'
        value={charge}
        onChange={handleCharge}
        />

        </div>
        <div className='form-group'>
        <label htmlFor='amount'>amount</label>
        <input 
        type= 'number' 
        className='form-control'
        id='amount'
        name='amount'
        placeholder='eg. 1000 '
        value={amount}
        onChange={handleAmount}
        />

        </div>
        </div>

        <button type='submit' className='btn'> submit  </button>

       </form>
}

export default ExpensesForm