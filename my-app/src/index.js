import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
// import store from './components/store/store.jsx'
import {rootReducer} from './components/redux/rootReducer';
import {createStore} from 'redux';
import { HashRouter as Router } from "react-router-dom";
import { store } from './components/toolkitRedux';

// const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <BrowserRouter>
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>
    // </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
