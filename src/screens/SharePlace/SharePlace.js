import React, {Component} from 'react';
import { connect } from "react-redux";

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from "../../store/actions/index";

class SharePlace extends Component {

    static options = {
        topBar: {
            title: {
                text: 'Search Places',
            },
        },
        bottomTab: {
            text: 'Search Places',
        },
    };

    addPlace = (placeName) => {
        this.props.onAddPlace(placeName);
    }

    render() {
        return (
            <PlaceInput addPlace={this.addPlace}></PlaceInput>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlace);