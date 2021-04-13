import React from 'react'

const Entry = (props) => {
    return (
        <div>
            <li className="entry-item mt-2 list-group-item">
                (props.Entry.description)
                <button className="close-button close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <span className="float-right">+250</span>
            </li>
        </div>
    )
}

export default Entry
