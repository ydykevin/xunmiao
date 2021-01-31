import React, { Component } from 'react';
import {
	Row,
	Col
} from 'antd';
import Block from './Block/Block';

export default class XLK30 extends Component {

	componentDidMount() {
		this.props.onRef(this);
		var json = {

		}
	}

	zoom = (percentage) => {
		let currZoom = parseFloat(document.getElementById('map').style.zoom);
		let newZoom = currZoom + percentage;
		if (newZoom > 0 && newZoom < 2) {
			document.getElementById('map').style.zoom = newZoom;
		}
	}

	render() {
		return (
			<div style={{ flex: '1', margin: '10px', backgroundColor: '#C0C0C0', overflowY: 'auto', overflowX: 'auto' }}>
				<div id='map' style={{ display: 'inline-block', width: '500px', margin: '10px', borderRadius: '10px', backgroundColor: 'white', padding: '10px', zoom:'1'}}>
					<div className='greyCircleBorder' style={{ padding: '10px', paddingRight: '0px' }}>
						<Row justify="space-between" align="bottom">
							<Col>
								<Block row='3' col='2' blockID='1' />
							</Col>
							<Col>
								<Block row='4' col='2' blockID='2' />
							</Col>
							<Col>
								<Block row='4' col='2' blockID='3' />
							</Col>
							<Col>
								<Block row='4' col='2' blockID='4' />
							</Col>
							<Col>
								<Block row='4' col='2' blockID='5' />
							</Col>
							<Col>
								<Block row='4' col='1' blockID='6' />
							</Col>
						</Row>
						<Row justify="space-between" style={{ marginTop: '10px' }}>
							<Col>
								<Block row='3' col='2' blockID='13' />
							</Col>
							<Col>
								<Block row='3' col='2' blockID='14' />
							</Col>
							<Col>
								<Block row='3' col='2' blockID='15' />
							</Col>
							<Col>
								<Block row='3' col='2' blockID='16' />
							</Col>
							<Col>
								<Block row='3' col='2' blockID='17' />
							</Col>
							<Col>
								<Block row='3' col='1' blockID='18' />
							</Col>
						</Row>
					</div>
					<div style={{ width: '200px' }}>
						<Row justify="end" className='childMT10'>
							<Col>
								<Block row='2' col='4' blockID='13' />
							</Col>
							<Col>
								<Block row='2' col='5' blockID='14' />
							</Col>
							<Col>
								<Block row='2' col='5' blockID='15' />
							</Col>
							<Col>
								<Block row='2' col='5' blockID='16' />
							</Col>
							<Col>
								<Block row='2' col='5' blockID='17' />
							</Col>
							<Col>
								<Block row='1' col='4' blockID='18' />
							</Col>
						</Row>
					</div>
				</div>
			</div>
		);
	}
}
