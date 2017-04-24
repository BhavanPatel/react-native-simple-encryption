import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {
  Text,
  Button
} from 'native-base';
import {encode,decode} from 'react-native-simple-encryption';

class Main extends Component {

  _doEncDec() {
    let enc = encode('key123','Hello World');
    console.log("Encrypted:",enc);

    let dec = decode('key123',enc);
    console.log("Decrypted:",dec);
  }


  render() {
    return (
      <View>
        <Button block danger onPress={this._doEncDec.bind(this)}>
          <Text >Click Here</Text>
        </Button>
      </View>
    );
  }
}

export default Main;
