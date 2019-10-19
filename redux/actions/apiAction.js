import axios from 'axios';
import { API } from '../actionTypes';

export const getPosts = () => (
	dispatch, //dispatch({ type: FOO, payload: 'This is from FOO redux' });
) =>
	axios({
		method: 'GET',
		url: `http://localhost:5000/main/api`,
		headers: [],
	})
		.then((response) => dispatch({ type: API, payload: response.data }))
		.catch((err) => console.log(err));
