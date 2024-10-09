import Cookies from 'js-cookie';
import usersData from '../assets/json/users.json';
import { login, logout as logoutAction } from '../store/slice/authSlice';
import { AppDispatch } from '../store/store';

export const handleLogin = (username: string, password: string, dispatch: AppDispatch) => {
    const user = usersData.users.find(user => user.username === username && user.password === password);
    if (user) {
        const token = 'mock.jwt.token'
        Cookies.set('jwt', token, { expires: 7 });
        dispatch(login(token));
        return true;
    }
    return false;
};

export const handleLogout = (dispatch: AppDispatch) => {
    Cookies.remove('jwt');
    dispatch(logoutAction());
};