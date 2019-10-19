// pages/signin.js
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setTitle } from '../redux/actions/titleAction';
import { authenticate } from '../redux/actions/authActions';

const Signin = ({ authenticate }) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log('login with ', { email, password });
		const user = { email, password };
		authenticate(user);
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<h3>Sign In</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-cover">
					<input
						className="input"
						type="text"
						placeholder="Email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-cover">
					<input
						className="input"
						type="password"
						placeholder="Password"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="form-cover">
					<button type="submit" className="btn">
						Sign In
					</button>
				</div>
			</form>
		</div>
	);
};

Signin.getInitialProps = ({ store }) => {
	store.dispatch(setTitle('Login Page'));
	return {};
};

export default connect((state) => state, { authenticate, setTitle })(Signin);
