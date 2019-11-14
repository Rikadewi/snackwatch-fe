import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
} from './types';
import { loginApi, logoutApi } from '../api/user';

export const login = (username, password) => dispatch => {
    dispatch(loginRequest());

    const response = loginApi(username, password);
    dispatch(loginSuccess(response));
};

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    };
};

export const loginSuccess = data => {
    return {
        type: LOGIN_SUCCESS,
        username: data.username,
        password: data.password,
    };
};

export const logout = (username) => dispatch => {
    const response = logoutApi(username);
    dispatch({
        type: LOGOUT,
    });
};
