import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import manageRecipes from './reducers/manageRecipes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(manageRecipes);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
