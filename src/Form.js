import { React, useCallback, useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        backgroundColor: "grey",
        color: "white",
    },
    label: {
        color: "white"
    }
});
export const Form = ({ onSubmit }) => {
    const classes = useStyles();
    const [value, setText] = useState('');

    const addMessage = (e) => {
        e.preventDefault();
        onSubmit(value);
        setText("");
    };
    const userInput = useCallback((event) => {
        setText(event.target.value);
    }, []);

    return (<div className="chat">
        <form className="form" onSubmit={addMessage} >
            <TextField id="my-input"
                className={classes.root}
                placeholder="message"
                label="Your Message Here"
                value={value}
                onChange={userInput}
                inputRef={(input) => {
                    if (input != null) {
                        input.focus();
                    }
                }}
            />
            < Button variant="contained" component="button" type="submit" > Send</Button>
        </form>
    </div>)
}