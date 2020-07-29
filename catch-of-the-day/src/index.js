import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/store-picker';
import App from './components/app';
import Router from './components/router';
import './css/style.css';



render(<Router/>, document.querySelector('#main'));