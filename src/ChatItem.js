import './App.css';
import { Link } from "react-router-dom";

export const ChatItem = ({ chat }) => {



    return (


        <Link key={chat.id} to={`/chats/${chat.id}`}></Link>


    )
}