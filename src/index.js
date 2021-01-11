import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer.jsx";
const store = createStore(rootReducer);
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#33d9b2",
        },
        secondary: {
            main: "#218c74",
        },
        warning: {
            main: "#ff793f",
        },
        error: {
            main: "#ff5252",
        },
        background: {
            main: "#f7f1e3",
        },
        success: {
            main: "#34ace0",
        },

        //spanish Pallete
    },
});
ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
