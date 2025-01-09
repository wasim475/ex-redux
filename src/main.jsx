import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import MainRoute from "./Route/MainRoute.jsx";
import { Provider } from "react-redux";
import store from './Store/store.js';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MainRoute />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
