// pages/index.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/apiAction';
import { setTitle } from '../redux/actions/titleAction';
import axios from 'axios';

const Index = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.getPosts();
	};
	return (
		<div style={{ textAlign: 'center' }}>
			<h3>Welcome to Authentication App</h3>
			<div>Prop from getInitialProps {props.custom}</div>
			<div>Prop from Redux {JSON.stringify(props)}</div>
			<button className="btn" onClick={handleSubmit}>
				Load
			</button>
		</div>
	);
};

Index.getInitialProps = async ({ store, isServer, pathname, query }) => {
	await store.dispatch(getPosts());
	store.dispatch(setTitle('Authentication Home'));
	return { custom: 'custom' };
};

export default connect((state) => state, { getPosts, setTitle })(Index);
