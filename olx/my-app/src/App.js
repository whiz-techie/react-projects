import React from 'react';
import Header from './Header.js'
import Firstbanner from './first-banner.js'
import "./App.css";
import Footer from "./components/Footer.js"
import LinkBar from "./components/LinkBar"
import {BrowserRouter, Route, Switch,  } from "react-router-dom"
import Carddisplay from "./components/Carddisplay"
function App() {
    
    return (
        <div>
            <BrowserRouter>
             <Header />
            <Firstbanner />

                <LinkBar/>
                <Switch>
                <Route exact path="/" ><Carddisplay/></Route>
        <Route>

        </Route>
                </Switch>
                   <Footer/>
            <div>
            </div>
            </BrowserRouter>
        </div>
    )
}

export default App
