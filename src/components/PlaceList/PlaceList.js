import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import PlaceListItem from './PlaceListItem/PlaceListItem';

const PlaceList = (props) => {
  itemPressed = (index) => {
    alert('Item pressed : ', index);
  };

  renderItem = ({item}) => (
    // <TouchableOpacity onPress={() => this._onPress(item)}>
    //   <Text>{item.title}</Text>
    // <TouchableOpacity/>
    <PlaceListItem
      key={item.id}
      name={item.name}
      image={item.image}
      onItemPress={() => props.selectPlace(item.id)}></PlaceListItem>
  );

  return (
    // <ScrollView>
    //     {props.places.map((p, i) => (
    //       <PlaceListItem
    //         key={i}
    //         name={p}
    //         onItemPress={() => props.selectPlace(i)}></PlaceListItem>
    //     ))}
    // </ScrollView>

    <FlatList

        data={props.places}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  );
};

export default PlaceList;

const styles = StyleSheet.create({});
