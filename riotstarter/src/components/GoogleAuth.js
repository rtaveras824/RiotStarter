import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { 
	Button, 
	Icon, 
} from 'semantic-ui-react';

import config from '../config';

class GoogleAuth extends Component {

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: config.GOOGLE_CLIENT_ID,
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();

				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	}

	onSignInClick = () => {
		this.auth.signIn();
	}

	onSignOutClick = () => {
		this.auth.signOut();
	}

	renderAuthButton = () => {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<Button onClick={ this.onSignOutClick } >
					<Icon name="google" />
					Sign Out
				</Button>
			)
		} else {
			return (
				<Button onClick={ this.onSignInClick } >
					<Icon name="google" />
					Sign In
				</Button>
			)
		}
	}


	render() {
		return (
			<div>
				{ this.renderAuthButton() }
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn }
};

export default connect(
	mapStateToProps,
	{ signIn, signOut }
)(GoogleAuth);