import { CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Toaster } from "components/common/Toaster";
import { ThemeProvider } from "contexts/theme";
import type { FunctionComponent, ReactElement } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import type { Store } from "store/index";
import { store } from "store/index";

declare global {
  interface Window {
    store: Store;
  }
}

interface IMockAppProps {
  children: JSX.Element;
}

const AllTheProviders: FunctionComponent<IMockAppProps> = ({ children }) => {
  window.store = store;
  const persistor = persistStore(store, {}, () => {
    persistor.persist();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {() => (
          <ThemeProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <CssBaseline />
              <Toaster />
              {children}
            </LocalizationProvider>
          </ThemeProvider>
        )}
      </PersistGate>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  return render(ui, {
    wrapper: ({ children }) => <AllTheProviders>{children}</AllTheProviders>,
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
