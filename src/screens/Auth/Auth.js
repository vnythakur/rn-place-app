import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

import { mainTabRoot } from "../mainTabScreen/mainTabScreen";

export default class Auth extends Component {
  onLogin = () => {
    mainTabRoot();
  };

  render() {
    return (
      <View>
        <Text> Login Screen </Text>
        <Button title="Login" onPress={this.onLogin}></Button>
      </View>
    );
  }
}
