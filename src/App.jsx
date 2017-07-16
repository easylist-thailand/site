import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import GithubCorner from 'react-github-corners';

// View
import Home from './view/Home';

// Stylesheet
import 'react-github-corners/dist/GithubCorner.css';
import './scss/main.css';

// Component
const { Header, Content } = Layout;

const homepage = 'https://easylist-thailand.github.io/';

class App extends Component {
	render() {
		return (
			<div id='container'>
				<GithubCorner url='https://github.com/easylist-thailand/easylist-thailand' target='_blank' />
				<Layout className='full-height'>
					<Header className='page-header'>
						<a id='app-name' href={homepage}>
							EasyList Thailand
						</a>
					</Header>
					<Content className='full-height'>
						<Row type='flex' justify='center'>
							<Col xs={23} sm={20}>
								<Home/>
							</Col>
						</Row>
					</Content>
				</Layout>
			</div>
		);
	}
}

export default App;
