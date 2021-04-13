import React from 'react'
import AddEntry from './components/AddEntry'
import Entries from './components/Entries'
import Summary from './components/Summary'
import TotalBalance from './components/TotalBalance'
import { ExpenseContextProvider } from './contexts/expenseContexts'

const App = () => {
    return (
        <ExpenseContextProvider>
        <div className="container justify-content-center">
            <TotalBalance/>
            <Summary/>
            <AddEntry/>
            <Entries/>
        </div>
        </ExpenseContextProvider>
    )
}

export default App
