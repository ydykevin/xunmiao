import React, { Component } from 'react';
import {
    Card,
    NavBar,
    SearchBar,
    Grid
} from 'antd-mobile';
import {
    HomeOutlined,
    AppstoreOutlined
} from '@ant-design/icons';
import Block from './block/Block';


class XLK30 extends Component {

    componentDidMount() {
        var json = {

        }
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <NavBar
                    mode="dark"
                    leftContent={<HomeOutlined />}
                    rightContent={[<AppstoreOutlined />]}
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
                <div style={{ textAlign: 'center', marginTop:'10px'}}>
                    信利康30楼
                </div>
                <div style={{ flex: '1', margin: '10px', backgroundColor: '#e8e8e8', overflowY: 'auto', overflowX: 'auto' }}>
                    <div style={{ height: '1000px', width: '1000px' ,margin:'10px', borderRadius:'10px', backgroundColor:'white'}}>
                        <Block row='2' col='3'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default XLK30;