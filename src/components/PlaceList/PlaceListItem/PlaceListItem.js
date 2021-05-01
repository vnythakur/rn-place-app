import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const PlaceListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onItemPress}>
      <View style={styles.placeListItem}>
        <Image source={props.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceListItem;

const styles = StyleSheet.create({
  placeListItem: {
    backgroundColor: '#FF0000',
    margin: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeName: {
    fontSize: 20,
  },
  placeImage: {
    marginRight: 8,
    width: 30,
    height: 30,
    resizeMode: 'stretch'
  }
});
