import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import XLK30 from './Map/XLK30';
import axios from 'axios';
import { global } from './Global';

export default class Home extends Component {

  state = {
    mapVisible: false,
    data: {},
    highlight: {}
  }

  zoom = (percentage) => {
    this.child.zoom(percentage);
  }

  onRef = (ref) => {
    this.child = ref;
  }

  componentDidMount = () => {
    this.loadingFloor(30);
  }

  loadingFloor = (floor, highlight = {}) => {
    this.setState({ mapVisible: false });
    axios.get(global.url + '/floor?floor=' + floor).then((res) => {
      if (res.status === 200) {
        this.setState({
          mapVisible: true,
          data: res.data,
          highlight: highlight
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  setHighlight = (highlight) => {
    this.loadingFloor(highlight['floor_id'], highlight);
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Navbar zoom={this.zoom} setMapVisible={(visible) => this.setState({ mapVisible: visible })} setHighlight={(highlight) => this.setHighlight(highlight)} />
        <div style={{ flex: '1', margin: '10px', backgroundColor: '#C0C0C0', overflowY: 'auto', overflowX: 'auto' }}>
          {
            this.state.mapVisible ?
              <XLK30 onRef={this.onRef} data={this.state.data} highlight={this.state.highlight} />
              :
              <center>
                <div className="spinner-border" role="status" style={{ color: 'white', marginTop: '10px' }}>
                  <span className="sr-only">Loading...</span>
                </div>
              </center>
          }
        </div>
      </div>
    )
  }
}
