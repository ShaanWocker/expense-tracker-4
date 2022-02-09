import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const {addTransaction} = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: Number(amount)
    }
    console.log('transaction in add transaction js', newTransaction)

    addTransaction(newTransaction)
  }

  return (
    <div className='container p-2'>
      <h3 className='m-1 p-1' >Add new transaction</h3>
      <form onSubmit={onSubmit} >
        <div className=' mb-2'>
          <label className='p-1' htmlFor='text'><strong>Description</strong></label>
          <br/>
          
          <input 
            className='form-control mb-2'
            type='text' 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder='Enter text...' 
          />
        </div>
        <div className=' mb-2'>
          <label className='p-1' htmlFor='amount'>
            <strong>Amount</strong> <br />
            (negative = expense, positive = income)
          </label>
          <input 
            className=' form-control mb-2'
            
            type='number' 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...' 
          />
        </div>
        <button className='btn btn-success mt-1'>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
