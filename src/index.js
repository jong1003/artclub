import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyBG6lddCmBACX3tU5SvnFkLx-EdMGQyv1w",
  authDomain: "leo-artclub.firebaseapp.com",
  databaseURL: "https://leo-artclub-default-rtdb.firebaseio.com",
  projectId: "leo-artclub",
  storageBucket: "leo-artclub.appspot.com",
  messagingSenderId: "81710147006",
  appId: "1:81710147006:web:279488e84e8c1a440185ef",
  measurementId: "G-L8Y54T6Q76"
};
ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App/>
  </FirebaseAppProvider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

