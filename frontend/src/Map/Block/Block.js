import React, { Component } from 'react';
import cat from '../../Image/cat.png';
import {
  Popover
} from 'antd-mobile';
import {
  Modal,
  Button
} from 'antd';
import axios from 'axios';
import { global, showMessage } from '../../Global';

export default class Block extends Component {

  state = {
    loading: false,
    showBlock: false,
    showForm: false,
    name: '',
    id: '',
    showPopover: true
  }

  onBlockClick = () => {
    console.log("clicked" + this.props.data.block_id);
    this.setState({ showBlock: true, showPopover: false});
  }

  onSeatClick = (seatID) => {
    this.setState({
      loading: false,
      showForm: true,
      seatID: seatID,
      name: '',
      id: '',
      showPopover: false
    }, () => {
      this.removeInputStyle();
    });
  }

  onSubmit = () => {
    if (this.state.loading) {
      return;
    }

    let idArr = ['name', 'id'];
    let regArr = [/.*/, /^[cC][0-9]{5}/];
    let validArr = [];
    let elementArr = [];

    for (let i = 0; i < idArr.length; i++) {
      validArr.push(false);
      elementArr.push(document.getElementById(idArr[i]));
    }

    for (let i = 0; i < idArr.length; i++) {
      let value = this.state[idArr[i]];
      console.log(value);
      if (value === "") {
        elementArr[i].classList.add('is-invalid');
        elementArr[i].classList.remove('is-valid');
      } else {
        if (regArr[i].test(value)) {
          elementArr[i].classList.add('is-valid');
          elementArr[i].classList.remove('is-invalid');
          validArr[i] = true;
        } else {
          elementArr[i].classList.add('is-invalid');
          elementArr[i].classList.remove('is-valid');
        }
      }
    }

    if (validArr.every((val) => val === true)) {
      console.log('login all pass');
      this.setState({ loading: true });

      let formData = new FormData();
      formData.append('name', this.state.name);
      formData.append('id', this.state.id);
      formData.append('floor', this.props.data.floor_id);
      formData.append('block', this.props.data.block_id);
      formData.append('seat', this.state.seatID);

      axios.post(global.url + '/seat', formData).then(res => {
        console.log(res);
        if (res.data) {
          showMessage('入座成功');
        } else {
          showMessage('入座失败，请联系管理员');
        }
        this.setState({ loading: false });
      }).catch(err => {
        console.log(err.response);
        showMessage('入座失败，请联系管理员');
        this.setState({ loading: false });
      });
    }
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    document.getElementById(event.target.name).classList.remove('is-invalid');
    document.getElementById(event.target.name).classList.remove('is-valid');
  }

  removeInputStyle = () => {
    let idArr = ['name', 'id'];
    for (let i = 0; i < idArr.length; i++) {
      var element = document.getElementById(idArr[i]);
      element.classList.remove('is-invalid');
      element.classList.remove('is-valid');
    }
  }

  componentDidMount = () => {
    if (JSON.stringify(this.props.highlight)!=="{}"){
      var highlight = this.props.highlight;
      document.getElementById(highlight.floor_id+'-'+highlight.block_id+'-'+highlight.seat_id).focus();
    }
  }

  render() {
    var seats = [];
    var seatsDetail = [];
    var data = this.props.data;
    for (var i = 0, seat_index = 0; i < data.col; i++) {
      var cols = [];
      var colsDetail = []
      for (var k = 0; k < data.rows; k++, seat_index++) {
        var style = {
          height: '30px',
          width: '30px',
          textAlign: 'center'
        }
        var style2 = {
          height: '150px',
          width: '150px',
          padding: '10px',
          display: 'table'
        }
        var style3 = {
          display: 'table-cell',
          verticalAlign: 'middle'
        }
        var seat = data.seat_list[seat_index];
        var id = data.floor_id + '-' + data.block_id + '-' + seat.seat_id;
        if (seat.status) {
          var highlight = this.props.highlight;
          if (data.floor_id === highlight.floor_id && data.block_id === highlight.block_id && seat.seat_id === highlight.seat_id) {
            cols.push(
              <Popover
                overlayStyle={{ color: 'currentColor' }}
                visible={this.state.showPopover}
                onCancel={()=>{this.setState({showPopover:false})}}
                placement={'top'}
                align={{
                  overflow: { adjustY: 0, adjustX: 0 }
                }}
                overlay={[
                  (<Popover.Item>{seat.staff_name+' '+highlight.id}</Popover.Item>),
                  (<Popover.Item>{'信利康 ' + data.floor_id + '楼 ' + data.block_id + '桌 '+seat.seat_id+'座'}</Popover.Item>),
                ]}
              >
                <div tabIndex={id} className='greyCircleBorder' id={id} style={{ height: '30px', width: '30px', textAlign: 'center', borderColor:'#108ee9', boxShadow: '1px 1px 5px #108ee9'}}>
                  <img src={cat} style={{ width: '24px'}} />
                </div>
              </Popover>
            );
          } else {
            cols.push(<div className='greyCircleBorder' id={id} style={style}><img src={cat} style={{ width: '24px' }} /></div>);
          }
          colsDetail.push(
            <div className='greyCircleBorder' style={style2}>
              <div style={style3}>
                座位号：{seat.seat_id}<br />
                姓名：{seat.staff_name}<br />
                工号：{seat.staff_id}
              </div>
            </div>
          );
        } else {
          cols.push(<div className='greyCircleBorder' id={id} style={style} dangerouslySetInnerHTML={{ __html: '&nbsp' }} />);
          colsDetail.push(
            <div className='greyCircleBorder' style={style2}>
              <div style={style3}>
                座位号：{seat.seat_id}<br />
                空座<br />
                <Button onClick={this.onSeatClick.bind(this, seat.seat_id)}>入座</Button>
              </div>
            </div>
          );
        }
      }
      seats.push(<div style={{ display: 'inline-block' }}>{cols}</div>);
      seatsDetail.push(<div style={{ display: 'inline-block' }}>{colsDetail}</div>);
    }

    return (
      <React.Fragment>
        <div className='greyCircleBorder' style={{ padding: '5px', display: 'inline-block', boxShadow: '1px 1px 3px #C0C0C0'}} onClick={this.onBlockClick}>
          {seats}
        </div>
        <Modal
          title={'信利康 ' + data.floor_id + '楼 ' + data.block_id + '桌 '}
          visible={this.state.showBlock}
          onCancel={() => { this.setState({ showBlock: false }) }}
          okButtonProps={{ style: { display: 'none' } }}
          cancelButtonProps={{ style: { display: 'none' } }}
          centered
        >
          <div style={{ overflowX: 'auto' }}>
            <div id='seatContainer' style={{ width: data.col * 150 + 'px', margin: 'auto', textAlign: 'center' }}>
              {seatsDetail}
            </div>
          </div>
        </Modal>
        <Modal
          title={'入座 信利康 ' + data.floor_id + '楼 ' + data.block_id + '桌 ' + this.state.seatID + '座'}
          visible={this.state.showForm}
          onCancel={() => { this.setState({ showForm: false }) }}
          cancelButtonProps={{ style: { display: 'none' } }}
          okButtonProps={{ style: { display: 'none' } }}
          centered
        >
          <form
            className="needs-validation"
            noValidate
          >
            <div className='mb-3'>
              <input
                value={this.state.name}
                onChange={this.changeHandler}
                type="text"
                id="name"
                className="form-control"
                name="name"
                placeholder="姓名"
                required
              />
              <div className="invalid-feedback">
                请输入姓名
              </div>
            </div>
            <div className='mb-3'>
              <input
                value={this.state.id}
                onChange={this.changeHandler}
                type="text"
                id="id"
                className="form-control"
                name="id"
                placeholder="工号"
                required
              />
              <div className="invalid-feedback">
                请输入正确工号
              </div>
            </div>
            {
              this.state.loading ?
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                : ''
            }
            <Button onClick={this.onSubmit} style={{ float: 'right' }}>
              提交
            </Button>
            <br />
          </form>
        </Modal>
      </React.Fragment>
    )
  }
}