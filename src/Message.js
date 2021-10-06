import './styles/Message.sass';

export const Message = ({ text, author }) => {
    return (
        <div className="messageList">
            <p className="message message-author">{author}</p>
            <p className="message">{text}</p>
        </div>
    );
}

