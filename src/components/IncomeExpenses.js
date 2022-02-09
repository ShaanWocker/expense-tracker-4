import React, {useContext} from 'react';

import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <>
      <div className='container p-3'>
        <div>
          <h4 className='income-header'>Income</h4>
          <p className='money plus'>{income}</p>
        </div>
        <div>
          <h4 className='expense-header'>Expense</h4>
          <p className='money minus'>{expense}</p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
