import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const PlaceInput = (props) => {

    const [place, setPlace] = useState('');

    onPlaceChange = (text) => {
        setPlace(text);
    }

    onBtnClick = () => {
        props.addPlace(place);
        setPlace('');
    }

    return (
        <View style={styles.containerInput}>
            <TextInput 
                style={styles.placeInput} 
                value={place} 
                onChangeText={onPlaceChange} 
                placeholder="Enter your favorite place"/>

            <View style={styles.placeButton}>
                <Button
                title="Add"
                color="#841584"
                accessibilityLabel="Add a new place"
                onPress={onBtnClick}
                />
            </View>
        </View>
    )
}

export default PlaceInput

const styles = StyleSheet.create({
    containerInput: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
      },
      placeInput: {
        width: '70%',
        borderColor: 'black',
        borderWidth: 1
      },
      placeButton: {
        width: '30%',
        color: 'blue'
      },
})
