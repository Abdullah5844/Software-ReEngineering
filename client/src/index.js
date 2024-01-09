import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = document.getElementById('root');
const appRoot = React.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
