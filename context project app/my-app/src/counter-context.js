import React, { createContext, useState} from 'react'

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [count, setCount] = useState (0)
    
    return (
        <AppContext.Provider value={{count}}>
            {props.children}
        </AppContext.Provider>
    )
}