import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

class ABPLink extends Component {
	static get propTypes() {
		return {
			url: PropTypes.string.isRequired,
			title: PropTypes.string
		};
	}
	render() {
		let location = encodeURIComponent(this.props.url);
		let title = encodeURIComponent(this.props.title);
		let url = `abp:subscribe?location=${location}&title=${title}`;

		return (
			<Button as='a' color='purple' href={url}>
				{this.props.children}
			</Button>
		);
	}
}

export default ABPLink;
