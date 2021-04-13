import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Component1 from './components/Component1'
import {AppProvider} from "./counter-context"

const App = () => {

    return (
        <AppProvider>
        <Component1 />
                
        </AppProvider>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))