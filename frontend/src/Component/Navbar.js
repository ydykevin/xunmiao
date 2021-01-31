import React, { Component } from 'react';
import {
	NavBar,
	SearchBar,
	Button,
	List,
	Drawer
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

	state = {
		open: false
	}

	onOpenChange = () => {
		this.setState({ open: !this.state.open });
	}

	floorChange = () => {
		console.log("floor changed");
	}

	render() {
		const sidebar = (<List>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) => {
				return (
					<List.Item key={index}>功能{index + 1}</List.Item>
				);
			})}
		</List>);

		return (
			<React.Fragment>
				<Drawer
					className="my-drawer"
					style={{ minHeight: document.documentElement.clientHeight }}
					enableDragHandle
					contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
					sidebar={sidebar}
					open={this.state.open}
					onOpenChange={this.onOpenChange}
				/>
				<NavBar
					mode="dark"
					leftContent={<Button type='primary' onClick={this.onOpenChange}><AppstoreOutlined key='1' /></Button>}
					rightContent={<HomeOutlined key='2' />}
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
						<Button type="primary" size="small" inline onClick={() => this.props.zoom(-0.1)}>-</Button>
					</Col>
					<Col>
						<Button type="primary" size="small" inline onClick={() => this.props.zoom(0.1)}>+</Button>
					</Col>
				</Row>
			</React.Fragment>
		)
	}
}
