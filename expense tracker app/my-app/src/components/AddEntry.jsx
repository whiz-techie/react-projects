import React from 'react'

const AddEntry = () => {
    return (
        <div>
            <form className="form-group">
        <div className="form-group">
            <label htmlFor="description">description
            </label>
            <input type="text" id="description" className="form-control"/>
        </div>

        <div className="form-group">
            <label htmlFor="amount">Amount
            </label>
            <input type="number" id="amount" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-info">
            Add Entry
        </button>
            </form>
        </div>
    )
}

export default AddEntry
