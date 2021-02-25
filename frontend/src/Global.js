import { Modal } from 'antd';

const global = {
  url: 'http://192.168.100.174:7999',
  // url: 'http://192.168.0.154:7999',
};

function showMessage(str, show = true) {
  let { confirm } = Modal;
  confirm({
    title: str,
    cancelButtonProps: { style: { display: 'none' } },
    okText: '确定',
    onOk: () => {
      if (show) {
        window.location.reload();
      }
    },
    centered: true
  });
}

export { global, showMessage };