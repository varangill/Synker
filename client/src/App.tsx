import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import "./App.css";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render( <Provider store={store}> <React.StrictMode>
  <AppRouter />
</React.StrictMode></Provider>)