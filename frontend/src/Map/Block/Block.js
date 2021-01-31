import React, { Component } from 'react';

export default class Block extends Component {

	onClick = () => {
		console.log("clicked" + this.props.blockID);
	}

	render() {
		var seats = [];
		for (var i = 0; i < this.props.col; i++) {
			var cols = [];
			for (var k = 0; k < this.props.row; k++) {
				cols.push(<div style={{ height: '30px', width: '30px', borderRadius: '10px', border: '1px solid #C0C0C0' }}></div>);
			}
			seats.push(<div style={{ display: 'inline-block' }}>{cols}</div>);
		}
		return (
			<div className='greyCircleBorder' style={{ padding: '5px', paddingBottom: '0px', display: 'inline-block' }} onClick={this.onClick}>
				{seats}
			</div>
		)
	}
}