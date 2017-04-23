import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlankLink extends Component {
	static get propTypes() {
		return {
			url: PropTypes.string.isRequired
		};
	}
	render() {
		return (
			<a href={this.props.url} target='_blank' rel='noopener noreferrer'>
				{this.props.children}
			</a>
		);
	}
}

export default BlankLink;
