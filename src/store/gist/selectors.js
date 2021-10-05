import { REQUEST_STATUS } from "../../utils/constants";

export const selectGistsLoading = (state) => state.gists.request.status === REQUEST_STATUS.PENDING;
export const selectGists = (state) => state.gists.list;
export const selectGistsError = (state) => state.gists.request.error;