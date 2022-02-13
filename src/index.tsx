import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from 'store';
import reportWebVitals from './reportWebVitals';
import MaterialProvider from './Providers/MaterialProvider';
import NeuroPartyPage from './pages/NeuroPartyPage/NeuroPartyPage.component';

function Root() {
  return (
    <MaterialProvider>
      <NeuroPartyPage />
    </MaterialProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
