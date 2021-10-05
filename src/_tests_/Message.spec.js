import React from 'react';
import { render } from "@testing-library/react";
import { Message } from "../Message";

describe('Message test', () => {
    it('match text adn author', () => {
        const text = "Test text"
        const author = "Test author"
        const component = render(<Message text={text} author={author} />);
        component.getByText(`${author}`);
        component.getByText(`${text}`);

    })
})