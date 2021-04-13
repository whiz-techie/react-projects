import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./components/App.css"

const app = () => {
    return (

    <BrowserRouter>
    <Navbar/>
    <switch>

    <Route exact path="/">
        <Home/>
    </Route>
    <Route path="/about">
        <About/>
    </Route>
    <Route path="/contact">
        <Contact/>
    </Route>
    <Route path="/blog">
        <Blog/>
    </Route>
    </switch>
    </BrowserRouter>
    )
}

export default app
