import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

/* GLOBAL VARIABLES */
window.$ = $;
window.jQuery = $;
window.$primaryLanguage = "en";
window.$secondaryLanguage = "pl";
window.$primaryLanguageIconId = "primary-lang-icon";
window.$secondaryLanguageIconId = "secondary-lang-icon";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
