// redux/reducers/fooReducer.js
import { TITLE } from '../actionTypes';

const reducer = (state = { title: '' }, action) => {
	switch (action.type) {
		case TITLE:
			return { ...state, title: action.payload };
		default:
			return state;
	}
};

export default reducer;
