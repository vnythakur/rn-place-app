import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class SideMenu extends Component {
    static pageId = "SideMenuPage";
    render() {
        return (
            <View style={styles.container}>
                <Text> Side Menu component </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white'
    },
   
});