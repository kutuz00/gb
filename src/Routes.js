import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import Chats from "./Chats";
export const Routes = () => {
    return (< BrowserRouter >
        <ul><li><Link to="/">Home</Link></li>
            <li><Link to="/chats">Chats</Link></li>
            <li><Link to="/profile">Profile</Link></li></ul>
        <Switch>
            <Route exact path='/'>
                <Home></Home>
            </Route>
            <Route exact path='/chats' component={Chats}></Route>
            <Route path='/chats/:chatId' component={Chats}>
            </Route>

            <Route path='/profile'>
                <Profile></Profile>
            </Route>
        </Switch>
    </BrowserRouter >)

}