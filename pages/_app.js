import React from 'react';
import { makeStore } from '../redux';
import { Provider } from 'react-redux';
import { getCookie, url } from '../redux/actions/authActions';
// import App, { Container } from 'next/app';
import axios from 'axios';
import withRedux from 'next-redux-wrapper';
import Head from '../components/head';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps, store }) => {
	return (
		<Provider store={store}>
			<Layout>
				<Head />
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
	// we can dispatch from here too
	ctx.store.dispatch({ type: 'API', payload: 'api' });
	const token = getCookie('token', ctx.req);
	axios
		.get(`${url}/users/api`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'x-auth-token': token,
			},
		})
		.then((res) => {
			// console.log(res.data);
			ctx.store.dispatch({ type: 'AUTHENTICATE', payload: token });
			ctx.store.dispatch({ type: 'USERINFO', payload: res.data });
		});
	const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
	return { pageProps };
};

export default withRedux(makeStore)(MyApp);
