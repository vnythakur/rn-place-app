import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import * as SCREENS from '../constants';

import SideMenu from "../SideMenu/SideMenu";

export const mainTabRoot = () => {

    Promise.all([
        Icon.getImageSource('navigate-circle-outline', 20),
        Icon.getImageSource('search-outline', 20),
        Icon.getImageSource('menu', 20),
    ]).then(source => {
        Navigation.setRoot({
            root: {
                
                sideMenu: {
                    left: {
                        component: {
                            name: SideMenu.pageId,
                        },
                    },
                    center: {
                        bottomTabs: {
                            options: {
                                bottomTabs: {
                                    titleDisplayMode: 'alwaysShow'
                                }
                            },
                            children: [
                                {
                                    stack: {
                                        children: [
                                            {
                                                component: {
                                                    name: SCREENS.FINDPLACE,
                                                    options: {
                                                        bottomTab: {
                                                            icon: source[0]
                                                        },
                                                        topBar: {
                                                            leftButtons: {
                                                                id: 'sideMenu',
                                                                icon: source[2]
                                                            }    
                                                        },
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    stack: {
                                        children: [
                                            {
                                                component: {
                                                    name: SCREENS.SEARCHPLACE,
                                                    options: {
                                                        bottomTab: {
                                                            icon: source[1]
                                                        },
                                                    }
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    }
                }
            },
        });
    }).catch(err => {
        console.log('[MainTab] Error : ', err);
    });

};
