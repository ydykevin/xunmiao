import React, { Component } from 'react'

export default class Block extends Component {
  render() {
    var seats = [];
    for (var i = 0; i < this.props.row; i++){
			var rows = [];
      for (var k = 0; k < this.props.col; k++){
        rows.push(<div style={{height:'30px',width:'30px',borderRadius:'10px',backgroundColor:'black'}}></div>);
      }
			seats.push(<div>{rows}</div>);
    }
    return (
      <div style={{borderRadius:'10px',width:'100px'}}>
				  {
					 seats
					}
      </div>
    )
  }
}
