import React, { Component } from 'react';
import {
	Row,
	Col
} from 'antd';
import Block from './Block/Block';

export default class XLK30 extends Component {

	componentDidMount() {
		this.props.onRef(this);
	}

	zoom = (percentage) => {
		let currZoom = parseFloat(document.getElementById('map').style.zoom);
		let newZoom = currZoom + percentage;
		if (newZoom > 0.1 && newZoom <= 2) {
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
								<Block data={this.props.data.block_list[0]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[1]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[2]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[3]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[4]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[5]}/>
							</Col>
						</Row>
						<Row justify="space-between" style={{ marginTop: '10px' }}>
							<Col>
								<Block data={this.props.data.block_list[12]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[13]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[14]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[15]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[16]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[17]}/>
							</Col>
						</Row>
					</div>
					<div style={{ width: '200px' }}>
						<Row justify="end" className='childMT10'>
							<Col>
								<Block data={this.props.data.block_list[23]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[24]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[25]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[26]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[27]}/>
							</Col>
							<Col>
								<Block data={this.props.data.block_list[28]}/>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		);
	}
}