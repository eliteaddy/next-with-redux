import React from 'react';
import NextHead from 'next/head';
import { connect } from 'react-redux';
import { setTitle } from '../redux/actions/titleAction';
import { string } from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '/bitcoin-img.jpg';

const Head = (props) => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title}</title>
		<meta name="description" content={props.description || defaultDescription} />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" sizes="192x192" href="/images/favicon.png" />
		<link rel="apple-touch-icon" href="/images/favicon.png" />
		<link rel="icon" href="/images/favicon.png" />
		<meta name="theme-color" content="#ffffffdb" />
		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta property="og:title" content={`${props.title} ` || 'Authentication App'} />
		<meta property="og:description" content={props.description || defaultDescription} />
		<link rel="stylesheet" href="/main.css" />
		<link rel="manifest" href="/manifest.json" />
		<meta name="twitter:site" content={props.url || defaultOGURL} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<link
			rel="stylesheet"
			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
			integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
			crossorigin="anonymous"
		/>
		<script src="/main.js" />
	</NextHead>
);

Head.propTypes = {
	title: string,
	description: string,
	brandname: string,
	url: string,
	ogImage: string,
	barcolor: string,
};

const mapStateToProps = (state) => ({ title: state.title.title });

export default connect(mapStateToProps, { setTitle })(Head);
