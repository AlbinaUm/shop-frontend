import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from './app/store.ts';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from 'redux-persist/integration/react';
import { addInterceptors } from './axiosApi.ts';

addInterceptors(store);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
