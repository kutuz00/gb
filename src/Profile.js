import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggleShowName, changeName } from './store/profile/actions';
import './styles/Profile.sass';
import { onValue, set } from '@firebase/database';
import { db, signOut } from './services/firebase';
import { ref } from '@firebase/database';

export const Profile = () => {
    // const name = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [name, setName] = useState('');

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);

    useEffect(() => {
        const userDbRef = ref(db, 'user');
        onValue(userDbRef, (snapshot) => {
            const data = snapshot.val();
            setName(data?.username || '');
        })
    });
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(changeName(value));

        set(ref(db, 'user'), { username: value });

    };

    const logOut = () => {
        signOut();
    }

    return (
        <>
            <div>
                <h4>{name.name}`s profile page</h4>
            </div>
            <div>
                <input type="text" value={value} onChange={handleChange} />
            </div>
            <div>
                <button onClick={handleSubmit}>Change Name</button>
                <button onClick={logOut}>Sign Out</button>
            </div>
        </>
    );

}