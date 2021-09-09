import React from "react";
import ReactDOM from "react-dom";
import "./App/styles.css";
import App from "./App/App";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./App/store"
import {Route, Switch} from "react-router";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>

        </HashRouter>
    </Provider>
    , rootElement);


