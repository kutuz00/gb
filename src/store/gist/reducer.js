
import {
    GET_GISTS_FAILURE,
    GET_GISTS_PENDING,
    GET_GISTS_SUCCESS
} from "./actions";
import { REQUEST_STATUS } from "../../utils/constants";
const initialState = {
    list: [],
    request: {
        error: null,
        status: REQUEST_STATUS.IDLE,
    }
};
export const gistsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_GISTS_PENDING: {
            return {
                ...state,
                request: {
                    error: null,
                    status: REQUEST_STATUS.PENDING,
                },
            };
        }
        case GET_GISTS_SUCCESS: {
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST_STATUS.SUCCESS,
                },
                list: payload,
            };
        }
        case GET_GISTS_FAILURE: {
            return {
                ...state,
                request: {
                    error: payload,
                    status: REQUEST_STATUS.FAILURE,
                },
            };
        }
        default:
            return state;
    }
}