import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { Provider } from "react-redux";
import store from "./redux";
import Theme from "./styles/Theme";
import { GlobalStyle } from "./styles/Global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Theme>
        <App />
      </Theme>
    </Provider>
  </React.StrictMode>
);
