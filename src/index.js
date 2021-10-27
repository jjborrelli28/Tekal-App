import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import TekalApp from "./TekalApp";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TekalApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
