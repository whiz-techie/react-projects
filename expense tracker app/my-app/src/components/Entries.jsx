import React from 'react'
import { useContext } from 'react'
import { ExpenseContext } from '../contexts/expenseContexts'
import Entry from './Entry'

const Entries = () => {
    const {entries} = useContext(ExpenseContext)
    return (
        <div className="mt-4">
            <h4 className="display-6">
        Entries
            </h4>
            <hr/>

        <div className="list-group">
            {entries && entries.map((el) => {
                return( <Entries key = {el.id} entry={el}/>)
            })}
        </div>

        </div>
    )
}

export default Entries
