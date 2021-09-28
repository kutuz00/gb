import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggleShowName, changeName } from './store/profile/actions';
import './styles/Profile.sass';

export const Profile = () => {
    const name = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const setName = useCallback(() => {

        dispatch(changeName(value))
        setValue('');

    }, [dispatch, value]);

    return (
        <>
            <div>
                <h4>{name.name}`s profile page</h4>
            </div>
            <div>
                <input type="text" value={value} onChange={handleChange} />
            </div>
            <div>
                <button onClick={setName}>Change Name</button>
            </div>
        </>
    );

}