import React, {useContext, useState} from 'react'
import { BankingContext } from './BankingContext'

const BankingComponent = () => {

    const[amount, setAmount] = useState("")
    const { dispatch, balance } = useContext(BankingContext);
    console.log(dispatch);
    return (
        <div>
            <h1>
                balance is : {balance}
            </h1>
            <input value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            />
            <button onClick={() => dispatch({type : "WITHDRAW", amount})}>Withdraw</button>
            <button onClick={() => dispatch({type :"DEPOSIT", amount})}>Deposit</button>
            <button onClick={() => dispatch({type :"INTREST"})}>Collect Interest</button>
            <button onClick={() => dispatch({type :"DELETE"})}>Delete Account</button>
        </div>
    )
}

export default BankingComponent
