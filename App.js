import React from 'react';
import { Provider } from 'react-redux';
import {Navigation} from 'react-native-navigation';

import * as Constants from './src/screens/constants';
import configureStore from "./src/store/configureStore";

import Auth from './src/screens/Auth/Auth';
import FindPlace from './src/screens/FindPlace/FindPlace';
import SharePlace from './src/screens/SharePlace/SharePlace';
import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail';
import SideMenu from './src/screens/SideMenu/SideMenu';


const store = configureStore();
const reduxProvider = (Component) => (props) => (
    <Provider store={store}>
        <Component {...props}/>
    </Provider>
);

const Screens = new Map();
Screens.set(Constants.AUTH, Auth);
Screens.set(Constants.FINDPLACE, FindPlace);
Screens.set(Constants.SEARCHPLACE, SharePlace);
Screens.set(PlaceDetail.pageId, PlaceDetail);
Screens.set(SideMenu.pageId, SideMenu);

// Register screens
Screens.forEach((C, key) => {
    Navigation.registerComponent(key, () => reduxProvider(C), () => C);
});

Navigation.setDefaultOptions({
    sideMenu: {
        left: {
            visible: false,
        }
    },
    statusBar: {
        backgroundColor: '#4d089a',
    },
    topBar: {
        title: {
            color: 'white',
        },
        backButton: {
            color: 'white',
        },
        background: {
            color: '#4d089a',
        },
    },
});

export const loginRoot = () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: Constants.AUTH,
                            options: {
                                topBar: {title: {text: 'Login'}},
                            },
                        },
                    },
                ],
            },
        },
    });
};

export const startApp = () => { loginRoot(); };
