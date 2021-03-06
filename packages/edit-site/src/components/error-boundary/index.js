/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import ErrorBoundaryWarning from './warning';

export default class ErrorBoundary extends Component {
	constructor() {
		super( ...arguments );

		this.reboot = this.reboot.bind( this );

		this.state = {
			error: null,
		};
	}

	static getDerivedStateFromError( error ) {
		return { error };
	}

	reboot() {
		this.props.onError();
	}

	render() {
		const { error } = this.state;
		if ( ! error ) {
			return this.props.children;
		}

		return (
			<ErrorBoundaryWarning
				message={ __(
					'The editor has encountered an unexpected error.'
				) }
				error={ error }
				reboot={ this.reboot }
			/>
		);
	}
}
