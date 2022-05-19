import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/redux-store"
import StoreContext, { Provider } from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
    // console.log(state);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>

        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
    rerenderEntireTree(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();