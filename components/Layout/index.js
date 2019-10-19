import Link from 'next/link';
import { connect } from 'react-redux';
import { deauthenticate } from '../../redux/actions/authActions';

const Layout = ({ children, deauthenticate, isAuthenticated }) => (
	<div>
		<nav>
			<ul className="navblock">
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				{!isAuthenticated && (
					<li>
						<Link href="/signin">
							<a>Sign In</a>
						</Link>
					</li>
				)}
				{!isAuthenticated && (
					<li>
						<Link href="/signup">
							<a>Sign Up</a>
						</Link>
					</li>
				)}

				{isAuthenticated && (
					<li onClick={deauthenticate}>
						<a>Sign Out</a>
					</li>
				)}

				{isAuthenticated && (
					<li>
						<Link href="/dashboard">
							<a>Dashboard</a>
						</Link>
					</li>
				)}
			</ul>
		</nav>

		<div className="container">{children}</div>
	</div>
);

const mapStateToProps = (state) => ({ isAuthenticated: !!state.authentication.token });

export default connect(mapStateToProps, { deauthenticate })(Layout);
