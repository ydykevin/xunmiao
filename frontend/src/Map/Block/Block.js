import React, { Component } from 'react';
import cat from '../../Image/cat.png';

export default class Block extends Component {

  onClick = () => {
    console.log("clicked" + this.props.data.block_id);
  }

  render() {
    var seats = [];
    for (var i = 0, seat_index = 0; i < this.props.data.col; i++) {
      var cols = [];
      for (var k = 0; k < this.props.data.rows; k++, seat_index++) {
        var style = {
          height: '30px',
          width: '30px',
          textAlign: 'center'
        }
        if (this.props.data.seat_list[seat_index].status) {
          cols.push(<div className='greyCircleBorder' style={style}><img src={cat} style={{ width: '24px' }} /></div>);
        } else {
          cols.push(<div className='greyCircleBorder' style={style} dangerouslySetInnerHTML={{ __html: '&nbsp' }} />);
        }
      }
      seats.push(<div style={{ display: 'inline-block' }}>{cols}</div>);
    }
    return (
      <div className='greyCircleBorder' style={{ padding: '5px', display: 'inline-block' }} onClick={this.onClick}>
        {seats}
      </div>
    )
  }
}