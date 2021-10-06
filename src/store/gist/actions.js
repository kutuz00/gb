import { PUBLIC_URL } from "../../utils/constants";

export const GET_GISTS_PENDING = "GISTS::GET_PENDING";
export const GET_GISTS_SUCCESS = "GISTS::GET_SUCCESS";
export const GET_GISTS_FAILURE = "GISTS::GET_FAILURE";

const getGistsPending = () => ({
    type: GET_GISTS_PENDING,
});
const getGistsSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    payload: gists,
});
const getGistsFailure = (error) => ({
    type: GET_GISTS_FAILURE,
    payload: error,
});
export const getGists = () => (dispatch) => {
    dispatch(getGistsPending());
    fetch(PUBLIC_URL)
        .then((responce) => {
            if (!responce.ok) {

                throw new Error(`error ${responce.status}`)

            }
            return responce.json();
        })
        .then((result) => {
            dispatch(getGistsSuccess(result));
        })
        .catch((e) => {
            dispatch(getGistsFailure(e.message));
        })
};

// export const getGists = () => async (dispatch) => {
//     dispatch(getGistsPending());

//     try {
//         const response = await fetch(PUBLIC_URL);

//         if (!response.ok) {
//             throw new Error(`error ${response.status}`);
//         }

//         const result = await response.json();
//         dispatch(getGistsSuccess(result));
//     } catch (e) {
//         console.log(e);
//         dispatch(getGistsFailure(e.message));
//     }
// };