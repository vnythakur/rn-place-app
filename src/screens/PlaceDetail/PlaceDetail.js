import React from 'react';
import { useDispatch } from "react-redux";
import { Navigation } from 'react-native-navigation';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { deletePlace } from '../../store/actions/index';

const PlaceDetail = (props) => {

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deletePlace(props.selectedPlace.id));
    Navigation.pop(props.componentId);
  }

  return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Image source={props.selectedPlace.image} style={styles.placeImage} />
          <Text>{props.selectedPlace.name}</Text>
        </View>

        <View style={styles.btn}>
          {/* <View style={{marginRight: 8}}><Button color="red" title="Delete" onPress={props.onDelete} /></View> */}

          <TouchableOpacity onPress={onDelete}>
            <View>
              <Icon name="trash" size={30} color="#F00" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
  );
};

PlaceDetail.pageId = 'PlaceDetailPage';

export default PlaceDetail;

const styles = StyleSheet.create({
    
    container: {
        padding: 16,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        marginBottom: 24,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },  
    placeImage: {
        width: 150,
        height: 100,
    },
});
