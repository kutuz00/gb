import React from "react";
import { login, signOut, signUp, auth } from './services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Gist } from "./Gist";
import Chats from "./Chats";
import { Signup } from "./Signup";
import { Login } from "./Login";
import PublicRoute from "./PublicRoute";
import PrivateRoute from './PrivateRoute';
export const Routes = () => {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });
        return unsubscribe;
    });
    return (< BrowserRouter >
        <ul><li><Link to="/">Home</Link></li>
            <li><Link to="/chats">Chats</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/gist">Gist</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li></ul>
        <Switch>
            <PublicRoute authenticated={authed} exact path='/'>
                <Home></Home>
            </PublicRoute>
            <PublicRoute authenticated={authed} exact path="/login">
                <Login />
            </PublicRoute>
            <PublicRoute authenticated={authed} exact path="/signup">
                <Signup />
            </PublicRoute>
            <PrivateRoute authenticated={authed} exact path='/chats' component={Chats}></PrivateRoute>
            <PrivateRoute authenticated={authed} path='/chats/:chatId' component={Chats}></PrivateRoute>
            <PrivateRoute authenticated={authed} path='/profile'>
                <Profile></Profile>
            </PrivateRoute>
            <PublicRoute authenticated={authed} path='/gist' component={Gist}>
            </PublicRoute>

        </Switch>
    </BrowserRouter >)

}