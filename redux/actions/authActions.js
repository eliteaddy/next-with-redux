// actions/authActions.js
import cookie from 'js-cookie';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import { AUTHENTICATE, DEAUTHENTICATE, REGISTER, USERINFO } from '../actionTypes';

export const url = `https://authapi-backend.glitch.me`;

export const authenticate = (user) => (dispatch) =>
	fetch(`${url}/users/api`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((data) => data.json())
		.then((response) => {
			// console.log('ok set cookie', response.token);
			setCookie('token', response.token);
			Router.push('/dashboard');
			dispatch({ type: AUTHENTICATE, payload: response.token });
		})
		.catch((err) => console.log(err));

export const deauthenticate = () => {
	return (dispatch) => {
		removeCookie('token');
		Router.push('/');
		dispatch({ type: DEAUTHENTICATE });
	};
};

export const register = (user) => (dispatch) => {
	// console.log(user);
	fetch(`${url}/users/api`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((data) => data.json())
		.then((response) => {
			// console.log('ok set cookie', response.token);
			setCookie('token', response.token);
			Router.push('/dashboard');
			dispatch({ type: REGISTER, payload: response.token });
		})
		.catch((err) => console.log(err));
};

export const getUser = (token) => (dispatch) => {
  if(!token) return null
	fetch(`${url}/users/api`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'x-auth-token': token,
		},
	})
		.then((res) => res.json())
		.then((user) => {
			dispatch({ type: USERINFO, payload: user });
		});
};

/**
 * cookie helper methods
 */

export const setCookie = (key, value) => {
	if (process.browser) {
		cookie.set(key, value, {
			expires: 1,
			path: '/',
		});
	}
};

export const removeCookie = (key) => {
	if (process.browser) {
		cookie.remove(key, {
			expires: 1,
		});
	}
};

export const getCookie = (key, req) => {
	return process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};

const getCookieFromBrowser = (key) => {
	return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
	if (!req.headers.cookie) {
		return undefined;
	}
	const rawCookie = req.headers.cookie.split(';').find((c) => c.trim().startsWith(`${key}=`));
	if (!rawCookie) {
		return undefined;
	}
	return rawCookie.split('=')[1];
};
