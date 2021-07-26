import { LOGIN, LOGOUT, REGISTER ,ADD_FEEDBACK} from './actionTypes';

export const login = (user) => ({
    type: LOGIN,
    payload: user
});

export const register = (user) => ({
    type: REGISTER,
    payload: user
});

export const addFeedback = (feedback) => (
    {
    type: ADD_FEEDBACK,
    payload: feedback
});

export const logout = () => ({
    type: LOGOUT,

});