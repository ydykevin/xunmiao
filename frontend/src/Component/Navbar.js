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
  Select
} from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import cat from '../Image/cat.png';

const { Option } = Select;

export default class Navbar extends Component {

  state = {
    navOpen: false
  }

  onNavOpenChange = () => {
    this.setState({ navOpen: !this.state.navOpen });
  }

  onFloorChange = (floor) => {
    console.log("floor changed" + floor);
  }

  render() {
    const sidebar = (
      <List>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) => {
          return (
            <List.Item key={index}>功能{index + 1}</List.Item>
          );
        })}
      </List>);

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
          onSubmit={value => console.log(value, 'onSubmit')}
          onClear={value => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => console.log('onCancel')}
          showCancelButton
          onChange={this.onChange}
        />
        <Row className='childCenter' style={{ margin: '10px', marginBottom: '0px', textAlign: 'center' }} justify='space-between'>
          <Col flex='auto'>
            <Select defaultValue="XLK30" style={{ width: '100%', textAlign: 'center' }} onChange={this.onFloorChange}>
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
            <Button type="primary" size="small" inline onClick={() => this.props.zoom(-0.1)}>-</Button>
          </Col>
          <Col>
            <Button type="primary" size="small" inline onClick={() => this.props.zoom(0.1)}>+</Button>
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