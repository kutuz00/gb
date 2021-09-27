import './App.css';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

export const ChatItem = ({ chat, onDeleteChat }) => {


    const handleDelete = () => {
        onDeleteChat(chat.id);
    }
    return (
        <><Link to={`/chats/${chat.id}`} >{chat.name}</Link><Button variant='contained' type='button' onClick={handleDelete}> Delete</Button></>
    )
}