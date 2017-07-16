import React, { Component } from 'react';
import { Card, Tooltip, Row, Col} from 'antd';

import { ABPLink, BlankLink, Space } from '../component';

const ABPUrl = 'https://adblockplus.org/';
const uBlockUrl = 'https://github.com/gorhill/uBlock/#installation';
const subscriptionFileUrl = 'https://raw.githubusercontent.com/easylist-thailand/easylist-thailand/master/subscription/easylist-thailand.txt';

const ABPIntro = 'Surf the web without annoying ads!';
const uBlockIntro = 'Finally, an efficient blocker. Easy on CPU and memory.';

class Home extends Component {
	render() {
		return (
			<div id='home'>
				<Card id='introduction'>
					<p>รายการตัวกรอง <b>EasyList</b> สำหรับประเทศไทย</p>
					<p>ช่วยคุณปิดกั้นโฆษณาทั้งหลายในเว็บต่างๆของประเทศไทย</p>
				</Card>
				<Card id='installation' title='การติดตั้ง'>
					<p>
						ติดตั้ง
						<Space/>
						<Tooltip title={ABPIntro}>
							<span>
								<BlankLink href={ABPUrl}>Adblock Plus</BlankLink>
							</span>
						</Tooltip>
						<Space/>
						หรือ
						<Space/>
						<Tooltip title={uBlockIntro}>
							<span>
								<BlankLink href={uBlockUrl}>uBlock Origin</BlankLink>
							</span>
						</Tooltip>
					</p>
					<p>
						จากนั้นก็เพิ่มไฟล์ Subscription
						<Space/>
						<BlankLink href={subscriptionFileUrl}>easylist-thailand.txt</BlankLink>
						<Space/>
						เข้าสู่ Adblock Plus หรือ uBlock Origin ของท่าน
					</p>

					<Row type='flex' justify='center'>
						<Col>
							หรือ
							<Space/>
							<ABPLink url={subscriptionFileUrl} title='EasyList Thailand'>กดที่นี่</ABPLink>
							<Space/>
							เพื่อเพิ่มทันที
						</Col>
					</Row>
				</Card>
			</div>
		);
	}
}

export default Home;
