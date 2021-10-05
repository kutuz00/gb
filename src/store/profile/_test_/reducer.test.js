import { profileReducer } from '../reducer.js';
import { TOGGLE_SHOW_NAME, CHANGE_NAME } from '../actions.js';

const TO_TEST_DEFAULT = 'TO_TEST_DEFAULT';
describe('Profile reducer', () => {
    const state = {
        showName: false,
        name: 'Default',
    };

    it('profileReducer returs result of switch case TOGGLE_SHOW_NAME', () => {
        state.showName = !state.showName;
        const expected = { ...state };
        const received = profileReducer(state, TOGGLE_SHOW_NAME);
        expect(expected).toEqual(received);
    });
    it('profileReducer returs result of action type CHANGE_NAME', () => {
        state.name = 'Test Name';
        const expected = { ...state };
        const received = profileReducer(state, CHANGE_NAME);
        expect(expected).toEqual(received);
    });
    it('profileReducer returs result switch default', () => {
        const caseDefault = {
            type: TO_TEST_DEFAULT,
        }
        const expected = { ...state };
        const received = profileReducer(state, caseDefault);
        expect(expected).toEqual(received);
    });
})