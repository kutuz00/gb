import React from "react";
import { List, ListItem } from "@material-ui/core";
import './App.css';

export const ChatList = ({ chats }) => {
    return (
        <div className="list">        <List>
            {chats.map((chat) =>
                (<ListItem key={chat.id}>{chat.chatName}</ListItem>)
            )}
        </List ></div>
    );
}