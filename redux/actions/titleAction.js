import { TITLE } from '../actionTypes';

export const setTitle = (data) => (dispatch) => {
	dispatch({ type: TITLE, payload: data });
};
