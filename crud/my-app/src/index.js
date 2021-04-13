import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Contacts from './components/Contacts'
import Search from "./components/Search"

const App = () => {
        const [contacts, setContacts] = useState([
            {
                name: 'jhon',
                email:'jhon@gmail.com'
            },
            {
                name: 'jhonny',
                email:'jhonny@gmail.com'
            },
            {
                name: 'jhonnathan',
                email:'jhonnathon@gmail.com'
            }
        ])
    const [newName, setName] = useState ("")
    const [newEmail, setEmail] = useState ("")
    const [searchTerm, setSearchTerm] = useState("");

    const updateSearchContacts = () => {
        const fiteredContacts = contacts.filter(el => {
            return(el.name.toLowerCase().includes(searchTerm))
        })

        return(fiteredContacts)
    }

    const handleNameChange = event => {
setName(event.target.value)
    }

    const handleEmailChange = event => {
setEmail(event.target.value)
    }
    
    const handleContactSubmit = event => {
        event.preventDefault();
        setContacts([...contacts, {name: newName, email: newEmail}]);
        setName("");
        setEmail("");
        
    }

    
    const handleDelete = (email) => {
         setContacts(contacts.filter(el => {
            return (el.email !== email);
        })
        )
    }

    const handleEdit = email => {
        const newContacts = [...contacts]
        const index = contacts.findIndex(el => el.email
            === email)

            newContacts[index] = {name: newName, email:
                 newEmail};

            setContacts(newContacts);
            setName("");
            setEmail("");

    }
    
    return (
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text"
                        onChange={handleNameChange}
                        className="form-control" 
                        placeholder="Name" value={newName}/>
                    </div>
                    <div className='col'>
                        <input type="text"
                        onChange={handleEmailChange}
                        className="form-control" 
                        placeholder="email" 
                        value={newEmail}/>
                    </div>
                </div>
                <button onClick={handleContactSubmit} type="submit" className="btn btn-primary">Add Contact</button>
            </form>
            <Search setSearchTerm ={setSearchTerm}/>
              <Contacts handleEdit={handleEdit} 
              handleDelete={handleDelete} 
              contacts = {updateSearchContacts()} />
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById
("root"));
