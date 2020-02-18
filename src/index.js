import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import { provider } from 'react-redux'


ReactDOM.render(<App />, document.getElementById('root'));


