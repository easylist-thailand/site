import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

class ABPLink extends Component {
	static get propTypes() {
		return {
			url: PropTypes.string.isRequired,
			title: PropTypes.string
		};
	}
	componentDidMount() {
		this.link.addEventListener('click', e => {
			e.preventDefault();
		});
	}
	render() {
		let url = encodeURIComponent(this.props.url);
		let title = encodeURIComponent(this.props.title);
		let subscribeUrl = `abp:subscribe?location=${url}`;
		if (this.props.title) {
			subscribeUrl += `&title=${title}`;
		}

		// This button isn't in use. Just define it for loading button stylesheet.
		let btn = <Button></Button>; // eslint-disable-line no-unused-vars

		return (
			<a
				className='ant-btn ant-btn-primary ant-btn-lg abp-link'
				href={subscribeUrl}
				ref={link => this.link = link}
			>
				{this.props.children}
			</a>
		);
	}
}

export default ABPLink;
