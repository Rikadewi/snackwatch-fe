import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGOUT,
} from "../actions/types";

const initialState = {
	isAuthenticated: false,
	username: '',
	password: '',
};

const auth = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				isAuthenticated: false,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				username: action.username,
				password: action.password,
				isAuthenticated: true,
			};
		case LOGOUT:
			return initialState;
		default:
			return state;
	}
}

export default auth;