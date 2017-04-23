import React, { Component } from 'react';

import {
	Container,
	Header,
	Segment
} from 'semantic-ui-react';

import Octicon from 'react-octicon';

import {
	ABPLink,
	BlankLink
} from '../components';

class Home extends Component {
	render() {
		return (
			<Container>
				<Segment basic>
					<Header as='h1' dividing>EasyList Thailand </Header>
					<div className='content'>
						<Segment color='red' size='large' raised>
							<p>รายการตัวกรอง <b>EasyList</b> สำหรับประเทศไทย</p>
							<p>ช่วยคุณปิดกั้นโฆษณาทั้งหลายในเว็บต่างๆของประเทศไทย</p>
						</Segment>
						<Segment color='green' size='large' raised>
							<Header as='h2'>การติดตั้ง</Header>
							<p>ติดตั้ง <BlankLink url='https://adblockplus.org/'>Adblock Plus</BlankLink> หรือ <BlankLink url='https://github.com/gorhill/uBlock/#installation'>uBlock Origin</BlankLink></p>
							<p>จากนั้นก็เพิ่มไฟล์ Subscription <BlankLink url='https://raw.githubusercontent.com/easylist-thailand/easylist-thailand/master/subscription/easylist-thailand.txt'>easylist-thailand.txt</BlankLink> เข้าสู่ Adblock Plus หรือ uBlock Origin ของท่าน</p>

							<Segment basic textAlign='center'>
								หรือ <ABPLink title='EasyList Thailand' url='https://raw.githubusercontent.com/easylist-thailand/easylist-thailand/master/subscription/easylist-thailand.txt'>กดที่นี่</ABPLink> เพื่อเพิ่มทันที
							</Segment>
						</Segment>
					</div>
				</Segment>
				<footer>
					<p id='repo-link'>
						<BlankLink url='https://github.com/easylist-thailand/easylist-thailand'>
							<Octicon name='mark-github' />
							<span>View on GitHub</span>
						</BlankLink>
					</p>
				</footer>
			</Container>
		);
	}
}

export default Home;
