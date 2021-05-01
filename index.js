// /**
//  * @format
//  */

// import React from "react";
// import {AppRegistry} from 'react-native';
// import { Provider } from "react-redux";

// import App from './App';
// import {name as appName} from './app.json';
// import configureStore from "./src/store/configureStore";

// const store = configureStore();

// const REDUX_STORE = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// );


// AppRegistry.registerComponent(appName, () => REDUX_STORE);

import { Navigation } from 'react-native-navigation';

import { startApp } from './App';


Navigation.events().registerAppLaunchedListener(() => {
    startApp();
});