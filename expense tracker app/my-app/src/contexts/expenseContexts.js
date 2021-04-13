import React, {createContext, useState} from 'react'

export const ExpenseContext = createContext();

export const ExpenseContextProvider = (props) => {

    const [entries, setEntries] = useState([
        {id: 1, decription: "pizza", amount: -20 },
        {id: 2, decription: "Salary", amount: 100 },
        {id: 3, decription: "Uber", amount: -15 },
        {id: 4, decription: "extra small condoms", amount: -20 },
        {id: 5, decription: "tax return", amount: 50 }
    ])

    return (
        <ExpenseContext.Provider value={{entries}}>
            {props.children}
        </ExpenseContext.Provider>
    )
}