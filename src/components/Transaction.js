import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={`p-2`}>
      {transaction.text}
      <span
        style={{ marginLeft: '20px' }}
        className={transaction.amount > 0 ? 'text-success' : 'text-danger'}
      >
        {sign}R {Math.abs(transaction.amount)}
      </span>
      <span
        onClick={() => deleteTransaction(transaction.id)}
        className='bg-danger p-1 text-light'
        style={{ cursor: 'pointer', marginLeft: '20px' }}
      >
        x
      </span>
    </li>
  );
};

export default Transaction;
