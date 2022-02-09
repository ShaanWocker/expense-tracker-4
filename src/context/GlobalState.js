import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions : [
        {id: 1, text: 'Flowers', amount: -50},
        {id: 2, text: 'Income', amount: 7500},
        {id: 3, text: 'Petrol', amount: -550},
        {id: 4, text: 'Plant', amount: -150}
    ]
}

// Create Context 
    export const GlobalContext = createContext(initialState)

// Provider Component
    export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

// Actions 

    // Delete Action
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    // Add Action
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            deleteTransaction,
            addTransaction
        }} >
            {children}
        </GlobalContext.Provider>
    )
}