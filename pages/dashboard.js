import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import Router from 'next/router';
import { setTitle } from '../redux/actions/titleAction';
import { getUser, getCookie, url } from '../redux/actions/authActions';

class Dashboard extends Component {
	state = {
		user: this.props.user,
		loading: true,
	};

	componentDidMount() {
		axios
			.get(`${url}/users/api`, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'x-auth-token': this.props.token,
				},
			})
			.then((res) => {
				// console.log(res.data);
				this.setState({ user: res.data, loading: false });
			});
	}

	render() {
		if (this.state.loading) {
			return <div>Loading...</div>;
		}
		return (
			<div style={{ textAlign: 'center' }}>
				<h2>Dashboard</h2>
				<div style={{ textAlign: 'left' }}>
					<h4>Name : {this.state.user.name}</h4>
					<h4>Email : {this.state.user.email}</h4>
					<h4>Date Created : {new Date(this.state.user.date).toLocaleDateString()}</h4>
					<h4>Time Created : {new Date(this.state.user.date).toLocaleTimeString()}</h4>
				</div>
			</div>
		);
	}
}

Dashboard.getInitialProps = async ({ store, res, req, isServer }) => {
	const token = getCookie('token', req);
	store.dispatch(setTitle('Dashboard'));
	// console.log(isServer, token);
	if (!token) {
		{
			isServer ? res.redirect('/signin') : Router.push('/signin');
		}
	}
	if (token) {
		store.dispatch(getUser(token));
		const user = store.getState().authentication.user;
		return { user, token };
	}
	return {};
};

export default connect((state) => state, { setTitle, getUser })(Dashboard);
