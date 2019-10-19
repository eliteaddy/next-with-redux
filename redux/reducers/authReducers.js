import { AUTHENTICATE, DEAUTHENTICATE, REGISTER, USERINFO } from '../actionTypes';

const authReducer = (state = { token: null, user: null }, action) => {
	switch (action.type) {
		case AUTHENTICATE:
			return { ...state, token: action.payload };
		case REGISTER:
			return { ...state, token: action.payload };
		case DEAUTHENTICATE:
			return { token: null, user: null };
		case USERINFO:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};

export default authReducer;
