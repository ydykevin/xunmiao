import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import 'antd-mobile/dist/antd-mobile.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
