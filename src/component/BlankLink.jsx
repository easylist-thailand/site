import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlankLink extends Component {
	static get propTypes() {
		return {
			href: PropTypes.string.isRequired
		};
	}
	render() {
		return (
			<a href={this.props.href} target='_blank' rel='noopener noreferrer'>
				{this.props.children}
			</a>
		);
	}
}

export default BlankLink;
