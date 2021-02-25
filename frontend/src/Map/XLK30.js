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

  createBlock = (start, end) => {
    var blocks = [];
    for (var i = start; i < end + 1; i++) {
      blocks.push(<Col><Block data={this.props.data.block_list[i]} highlight={this.props.highlight} /></Col>);
    }
    return (
      <React.Fragment>
        { blocks}
      </React.Fragment>
    );
  }

  render() {
    return (
      <div id='map' style={{ display: 'inline-block', width: '500px', margin: '10px', borderRadius: '10px', backgroundColor: 'white', padding: '10px', zoom: '1' }}>
        <div className='greyCircleBorder' style={{ padding: '10px', paddingRight: '0px' }}>
          <Row justify="space-between" align="bottom">
            { this.createBlock(0, 5) }
          </Row>
          <Row justify="space-between" style={{ marginTop: '10px' }}>
            { this.createBlock(12, 17) }
          </Row>
        </div>
        <div style={{ width: '200px' }}>
          <Row justify="end" className='childMT10'>
            { this.createBlock(23, 28) }
          </Row>
        </div>
      </div>
    );
  }
}