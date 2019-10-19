import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTitle } from '../redux/actions/titleAction';
import { register } from '../redux/actions/authActions';

class Signup extends Component {
	state = {
		name: '',
		email: '',
		password: '',
	};
	static getInitialProps = ({ store }) => {
		store.dispatch(setTitle('Register Page'));
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, password } = this.state;
		// console.log('register with ', { email, name, password });
		const user = { name, email, password };
		this.props.register(user);
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h3>Sign Up</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="form-cover">
						<input
							type="text"
							placeholder="Your Name"
							name="name"
							required
							value={this.state.name}
							onChange={this.handleChange}
							className="input"
						/>
					</div>
					<div className="form-cover">
						<input
							type="text"
							placeholder="Email"
							name="email"
							required
							value={this.state.email}
							onChange={this.handleChange}
							className="input"
						/>
					</div>
					<div className="form-cover">
						<input
							type="password"
							placeholder="Password"
							name="password"
							required
							value={this.state.password}
							onChange={this.handleChange}
							className="input"
						/>
					</div>
					<div className="form-cover">
						<button type="submit" className="btn">
							Sign Up
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect((state) => state, { setTitle, register })(Signup);
