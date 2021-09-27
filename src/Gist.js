import { CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists } from "./store/gist/actions";
import { selectGistsError, selectGistsLoading, selectGists } from "./store/gist/selectors";

export const Gist = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);
    const gists = useSelector(selectGists);
    const reload = () => {
        dispatch(getGists);
    };
    useEffect(() => {
        reload();
    }, []);
    return (
        <div><h3>From Gist</h3>
            {error ?
                (<><h2>Something went wrong. {error}</h2>
                    <button onClick={reload}>Reload</button>
                </>) : (
                    gists?.map((gist) => (
                        <h4 key={gist.id}>{gist.description}{gist.id}</h4>
                    ))
                )}

            {loading && <CircularProgress />}
        </div>
    )
}


