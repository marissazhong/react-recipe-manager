import React from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import ReactDOM from '../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom';
import './index.css';
import App from './App';
import recipesReducer from './reducers/recipesReducer';
import { Provider } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import { createStore } from '../../../Library/Caches/typescript/2.9/node_modules/redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    manageRecipes,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
