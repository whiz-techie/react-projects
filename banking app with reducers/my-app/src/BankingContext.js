import React, {createContext, useState, useReducer} from 'react';

export const BankingContext = createContext()

const bankingReducer = (state, action) => {
switch(action.type){
    case "WITHDRAW":
        return state - parseInt(action.amount)
    
    case "DEPOSIT":
        return state+parseInt(action.amount)

        case "INTREST":
        return (state*1.03)

        case "DELETE":
        return (0)
        default:
            return (state)

    }
}


export const BankingContextProvider = (props) => {
    
    const [balance, dispatch] = useReducer(bankingReducer, 0)


  return(
        <BankingContext.Provider value={{ balance, dispatch }}>
            {props.children}
        </BankingContext.Provider>
        )
    }
    // return (
    //     <BankingContext.Provider value={{balance, handleWithdraw, handleDeposit, handleIntrest,handleDelete}}>
    //         {props.children}
    //     </BankingContext.Provider>
    //     )
    // }

    // const [balance, setBalance] = useState(0)

    // const handleWithdraw = (amount) => {
    //     setBalance(balance - parseInt(amount))
    // }

    // const handleDeposit = (amount) => {
    //     setBalance(balance + parseInt(amount))
    // }

    // const handleIntrest = (amount) => {
    //     setBalance(balance * 1.03)
    // }

    // const handleDelete = (amount) => {
    //     setBalance(0)
    // }
