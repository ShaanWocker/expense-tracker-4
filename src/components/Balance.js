import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);

  let total = amounts.reduce((a, b) => a+b, 0)
  total = total.toFixed(2)
 


  return (
    <div className='container p-2'>
      <h4>Your Balance</h4>
      <h1 >R{total}
      </h1>
    </div>
  );
};

export default Balance;
