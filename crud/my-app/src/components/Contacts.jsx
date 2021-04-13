import React from 'react';


const Contacts = props => {
    return (<div className ="list-group">
        {props.contacts.map(el => {
            return (
                <li className="list-group-item">
                    {el.name} {el.email}
                    <button onClick = {() => props.handleDelete(el.email)}
                     className="btn btn-danger mx-2"
                     >
                        Delete
                    </button>
                    <button onClick={() => props.handleEdit
                    (el.email)} className="btn 
                    btn-warning">
                        Edit
                    </button>
                </li>
            )
        })}
    </div>)
}

export default Contacts;