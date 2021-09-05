import './styles/Message.sass'

function Message(props) {
    return (

        <div className="messageList">
            <p className="message message-author">{props.messageList.author}</p>
            <p className="message">{props.messageList.text}</p>
        </div>


    );
}

export default Message;