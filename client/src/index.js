import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/index.js';
import axios from 'axios';

// firebase:
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase-config';

axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = "";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conecting ...'}>
      <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
              <App />
            </React.StrictMode>
        </BrowserRouter>
      </Provider>
    </Suspense>
  </FirebaseAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
