import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import App from "App";
import { Toaster } from "components/common/Toaster";
import { ThemeProvider } from "contexts/theme";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {() => (
            <>
              <CssBaseline />
              <Toaster />
              <App />
            </>
          )}
        </PersistGate>
      </Provider>
    </LocalizationProvider>
  </ThemeProvider>
);
