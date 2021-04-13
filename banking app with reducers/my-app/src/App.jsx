import React from 'react'
import BankingComponent from './BankingComponent'
import { BankingContextProvider } from './BankingContext'

const App = () => {
    return (
        <BankingContextProvider>
        <div>
            <BankingComponent/>
        </div>
        </BankingContextProvider>
    )
}

export default App
