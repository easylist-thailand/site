import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

// View
import Home from './view/Home';

// Stylesheet
import './scss/main.css';

// Component
const { Header, Content } = Layout;

const homepage = 'https://easylist-thailand.github.io/';

class App extends Component {
	render() {
		return (
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
		);
	}
}

export default App;
