// --------------------------------- IMPORTS -------------------------------- //

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import store from "./store/index.js";
import { Provider } from "react-redux";

// --------------------------------- MAIN FUNCTION -------------------------------- //

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <GlobalStyles />
        <App />
    </Provider>
);

// --------------------------------- EXPORTS -------------------------------- //
