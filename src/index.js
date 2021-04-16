import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components';
import theme from './Componets/theme/index';

ReactDOM.render
    (<ThemeProvider theme={theme}><App /></ThemeProvider>,
         document.getElementById("root")
    );

// export const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
