import './styles/Message.sass'

function Message(props) {
    return (

        <header className="Message">

            <h3>{props.text}</h3>
        </header>


    );
}

export default Message;