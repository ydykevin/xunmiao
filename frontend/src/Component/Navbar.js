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
  Select,
  Modal
} from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import cat from '../Image/cat.png';
import axios from 'axios';
import { global, showMessage } from '../Global';

const { Option } = Select;

export default class Navbar extends Component {

  state = {
    navOpen: false,
    loadingSearch: false,
    showResult: false,
    result: []
  }

  onNavOpenChange = () => {
    this.setState({ navOpen: !this.state.navOpen });
  }

  onFloorChange = (floor) => {
    console.log("floor changed" + floor);
  }

  onLeave = () => {
    let formData = new FormData();
    formData.append('name', '123');
    formData.append('id', '123');
    formData.append('floor', 30);
    formData.append('block', 2);
    formData.append('seat', 3);

    axios.post(global.url + '/leave', formData).then(res => {
      console.log(res);
      if (res.data) {
        showMessage('离座成功');
      } else {
        showMessage('离座失败，请联系管理员');
      }
    }).catch(err => {
      console.log(err.response);
      showMessage('离座失败，请联系管理员');
    });
  }

  onSearch = (keyword) => {
    if (this.state.loadingSearch || keyword === '') {
      return;
    }

    this.setState({ loadingSearch: true });

    let formData = new FormData();
    formData.append('keyword', keyword);

    axios.post(global.url + '/search', formData).then(res => {
      console.log(res);
      var result = [];
      if (res.data.length > 0) {
        for (let i = 0; i < res.data.length; i++) {
          let data = res.data[i];
          result.push(<div className='greyCircleBorder' onClick={() => {
            this.setState({ showResult: false });
            this.props.setHighlight(data);
          }} style={{ padding: '10px', marginTop: '20px', marginBottom: '20px' }}>{'姓名：' + data.name}<br />{'工号：' + data.id}</div>);
        }
        this.setState({ result: result, showResult: true });
      } else {
        showMessage('无喵可寻', false);
      }
      this.setState({ loadingSearch: false });
    }).catch(err => {
      console.log(err.response);
      showMessage('查询失败，请联系管理员');
      this.setState({ loadingSearch: false });
    });
  }

  render() {
    const sidebar = (
      // <List>
      //   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) => {
      //     return (
      //       <List.Item key={index}>功能{index + 1}</List.Item>
      //     );
      //   })}
      // </List>);
      <List>
        <List.Item onClick={this.onLeave}>离坐</List.Item>
      </List>
    );

    return (
      <React.Fragment>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebar={sidebar}
          open={this.state.navOpen}
          onOpenChange={this.onNavOpenChange}
        />
        <NavBar
          mode="dark"
          leftContent={<Button type='primary' onClick={this.onNavOpenChange}><AppstoreOutlined key='1' /></Button>}
          rightContent={<HomeOutlined key='2' />}
        >
          寻喵
        </NavBar>
        <SearchBar
          placeholder="输入喵喵中文名或工号"
          onSubmit={(keyword) => this.onSearch(keyword)}
          showCancelButton
        // onClear={value => console.log(value, 'onClear')}
        // onFocus={() => console.log('onFocus')}
        // onBlur={() => console.log('onBlur')}
        // onCancel={() => console.log('onCancel')}
        // onChange={this.onChange}
        />
        <Row className='childCenter' style={{ margin: '10px', marginBottom: '0px', textAlign: 'center' }} justify='space-between'>
          <Col flex='auto'>
            <Select defaultValue="XLK30" id='select' style={{ width: '100%', textAlign: 'center' }}>
              <Option value="XLK25">信利康25楼</Option>
              <Option value="XLK26">信利康26楼</Option>
              <Option value="XLK27">信利康27楼</Option>
              <Option value="XLK28">信利康28楼</Option>
              <Option value="XLK29">信利康29楼</Option>
              <Option value="XLK30">信利康30楼</Option>
              <Option value="XLK31">信利康31楼</Option>
            </Select>
          </Col>
          <Col style={{ marginLeft: '10px', marginRight: '10px' }}>
            <Button type="primary" size="small" inline style={{ color: 'white', textDecoration: 'none' }} onClick={() => this.props.zoom(-0.1)}>-</Button>
          </Col>
          <Col>
            <Button type="primary" size="small" inline style={{ color: 'white', textDecoration: 'none' }} onClick={() => this.props.zoom(0.1)}>+</Button>
          </Col>
        </Row>
        <Row justify='space-around' style={{ marginTop: '10px' }}>
          <Col>
            <div className='greyCircleBorder' style={iconStyle}><img src={cat} style={{ width: '24px' }} /></div>
            <div style={textStyle}>有喵</div>
          </Col>
          <Col>
            <div className='greyCircleBorder' style={iconStyle} dangerouslySetInnerHTML={{ __html: '&nbsp' }} />
            <div style={textStyle}>无喵</div>
          </Col>
          <Col>
            <div style={textStyle}>点击工位查看详情</div>
          </Col>
        </Row>
        <Modal
          title={'选择你想找的喵'}
          visible={this.state.showResult}
          onCancel={() => { this.setState({ showResult: false }) }}
          okButtonProps={{ style: { display: 'none' } }}
          cancelButtonProps={{ style: { display: 'none' } }}
          centered
        >
          <div style={{ textAlign: 'center', paddingLeft: '10px', paddingRight: '10px' }}>
            {this.state.result}
          </div>
        </Modal>
      </React.Fragment>
    )
  }
}

const iconStyle = {
  height: '30px',
  width: '30px',
  textAlign: 'center',
  display: 'inline-block',
  marginRight: '10px'
}

const textStyle = {
  display: 'inline-block',
  lineHeight: '30px',
  height: '30px'
}