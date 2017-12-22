import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import App from './App';
import {Provider} from 'react-redux'
import store from './store/index'
import registerServiceWorker from './registerServiceWorker';

// let store=createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
