import { store } from './store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleShowName } from './store/profile/actions';
import './styles/Profile.sass';

export const Profile = () => {
    const showName = useSelector((state) => state.showName);
    const dispatch = useDispatch();
    const toggleCheck = () => {
        dispatch(toggleShowName);
    };
    return (
        <div className='profile' onClick={toggleCheck}><h3>Profile page</h3>
            <input type='checkbox' />
            {showName && <div>Show this block</div>}</div>

    )
}