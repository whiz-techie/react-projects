import React, {useContext} from 'react'
import { ExpenseContext } from '../contexts/expenseContexts'

const Summary = () => {
    const {entries} = (ExpenseContext)

    let income = 0
    let expense = 0

    entries.forEach(el => {
        if(el.amount > 0) {
            income += parseInt(el.amount)
        }else {
            expense += parseInt(el.amount)
        }
    })
    return (
        <div className="row">
            <div className="col-sm-6">

            </div>
            <div className="card border-success">
                <div className="card-body">
                    <h5 className="card-title text-center">
                        Income
                        <h4 className="text-center text-success display-5">
                            +${income}
                        </h4>
                    </h5>
                </div>
            </div>



            <div className="col-sm-6">

</div>
<div className="card border-danger">
    <div className="card-body">
        <h5 className="card-title text-center">
            Expenses
            <h4 className="text-center text-danger display-5">
                -${expense}
            </h4>
        </h5>
    </div>
</div>
        </div>

        
    )
}

export default Summary
