import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './reducers';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { showAddDeck, hideAddDeck, addDeck } from './actions';
import { getLocalStorage } from './localStorage';


const store = createStore(reducer, getLocalStorage(), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));
store.dispatch({
    type: 'ADD_CARD',
    data: {
        front: 'front',
        back: 'back'
    }
});

store.dispatch({
    type: 'ADD_CARD',
    data: {
        front: 'front2',
        back: 'back2'
    }
});

window.show = () => store.dispatch(showAddDeck());
window.hide = () => store.dispatch(hideAddDeck());
window.add = () => store.dispatch(addDeck(new Date().toString()));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
