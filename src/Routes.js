import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Chats } from "./Chats"
export const Routes = () => {
    return (< BrowserRouter >
        <Switch>
            <Route exact path='/'>
                <Home></Home>
            </Route>
            <Route path='/chats'>
                <Chats></Chats>
            </Route>
            <Route path='/profile'>
                <Profile></Profile>
            </Route>
        </Switch>
    </BrowserRouter >)

}