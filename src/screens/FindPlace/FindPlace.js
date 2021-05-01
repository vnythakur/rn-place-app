import React, { Component } from 'react'
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";

import PlaceList from '../../components/PlaceList/PlaceList';
import PlaceDetail from '../PlaceDetail/PlaceDetail';

class FindPlace extends Component {
    static options = {
        topBar: {
            title: {
                text: 'Find Places',
            },
        },
        bottomTab: {
            text: 'Find Places',
        },
    };

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    navigationButtonPressed = (event) => {
        console.log(event);
        if (event.buttonId === 'sideMenu') {
            Navigation.mergeOptions(this.props.componentId, {
                sideMenu: {
                    left: {
                        visible: true
                    }
                }
            });
        }
    }

    onPlaceSelect = (id) => {

        const selPlace = this.props.placeList.find(p => p.id === id);

        Navigation.push(this.props.componentId, {
            component: {
                name: PlaceDetail.pageId,
                options: {
                    topBar: {
                        title: {
                            text: selPlace.name
                        }
                    }
                },
                passProps: {
                    selectedPlace: selPlace
                }
            }
        })
    }

    render() {
        return (
            <PlaceList places={this.props.placeList} selectPlace={this.onPlaceSelect} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        placeList: state.places.placeList
    }
}

export default connect(mapStateToProps)(FindPlace);