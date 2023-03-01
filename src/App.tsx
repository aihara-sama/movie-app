import { CacheProvider } from "@emotion/react";
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Toaster } from "components/common/Toaster";
import { ThemeProvider } from "contexts/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store";
import createEmotionCache from "utils/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
function App() {
  const a = 2;
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <head>
        <title>Home</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800,900&display=swap"
        />
        <meta name="emotion-insertion-point" content="" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {() => (
            <ThemeProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CssBaseline />
                <Toaster />
                <Typography>Home</Typography>
              </LocalizationProvider>
            </ThemeProvider>
          )}
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
}

export default App;
