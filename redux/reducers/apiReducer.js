// redux/reducers/apiReducer.js
import { API } from '../actionTypes';

const reducer = (state = { api: '' }, action) => {
	switch (action.type) {
		case API:
			return { ...state, api: action.payload };
		default:
			return state;
	}
};

export default reducer;
