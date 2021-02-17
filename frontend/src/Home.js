import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import XLK30 from './Map/XLK30';
import axios from 'axios';
import global from './Global';

export default class Home extends Component {

  state = {
    showMap: false,
    data: {}
  }

  zoom = (percentage) => {
    this.child.zoom(percentage);
  }

  onRef = (ref) => {
    this.child = ref;
  }

  componentDidMount = () => {
    axios.get(global.url + '/floor?floor=30').then((res) => {
      if (res.status === 200) {
        this.setState({
          showMap: true,
          data: res.data 
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Navbar zoom={this.zoom} />
        {
          this.state.showMap ?
            <XLK30 onRef={this.onRef} data={this.state.data}/>
            :
            ''
        }
      </div>
    )
  }
}
