import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <BrowserRouter basename="/nanny-services">
            <App />
            <ToastContainer autoClose="4000" />
          </BrowserRouter>
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </React.StrictMode>
);
