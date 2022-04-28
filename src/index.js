import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ITEMS } from './components/data'

import './index.css';

const store = createStore(() => ({
    workReport: ITEMS
}));

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById("root")
);
