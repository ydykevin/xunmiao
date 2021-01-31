import React, { Component } from 'react';
import {
	NavBar,
	SearchBar,
	Button
} from 'antd-mobile';
import {
	Row,
	Col,
	Select
} from 'antd';
import {
	HomeOutlined,
	AppstoreOutlined
} from '@ant-design/icons';

const { Option } = Select;

export default class Navbar extends Component {

	floorChange = () => {
		console.log("floor changed");
	}

	render() {
		return (
			<React.Fragment>
				<NavBar
					mode="dark"
					leftContent={<HomeOutlined key='1'/>}
					rightContent={[<AppstoreOutlined key='2'/>]}
				>
					寻喵
                </NavBar>
				<SearchBar
					placeholder="输入喵喵中文名或工号"
					onSubmit={value => console.log(value, 'onSubmit')}
					onClear={value => console.log(value, 'onClear')}
					onFocus={() => console.log('onFocus')}
					onBlur={() => console.log('onBlur')}
					onCancel={() => console.log('onCancel')}
					showCancelButton
					onChange={this.onChange}
				/>
				<Row className='childCenter' style={{ margin: '10px', marginBottom: '0px', textAlign: 'center' }} justify='space-between'>
					<Col flex='auto'>
						<Select defaultValue="XLK30" style={{ width: '100%', textAlign: 'center' }} onChange={this.handleChange}>
							<Option value="XLK30">信利康30楼</Option>
						</Select>
					</Col>
					<Col style={{ marginLeft: '10px', marginRight: '10px' }}>
						<Button type="primary" size="small" inline onClick={()=>this.props.zoom(-0.1)}>-</Button>
					</Col>
					<Col>
						<Button type="primary" size="small" inline onClick={()=>this.props.zoom(0.1)}>+</Button>
					</Col>
				</Row>
			</React.Fragment>
		)
	}
}
