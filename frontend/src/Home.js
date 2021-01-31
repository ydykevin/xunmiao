import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import XLK30 from './Map/XLK30';

export default class Home extends Component {

	zoom = (percentage) => {
		this.child.zoom(percentage);
	}

	onRef = (ref) => {
		this.child = ref;
	}

	render() {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
				<Navbar zoom={this.zoom}/>
				<XLK30 onRef={this.onRef}/>
			</div>
		)
	}
}
