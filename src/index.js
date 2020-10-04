import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ContextProvider } from "./Context";
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))







ReactDOM.render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>, 
    document.getElementById("root")
)