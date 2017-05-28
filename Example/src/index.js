import React, { Component } from 'react';
import { Image, View } from 'react-native';
import {
  Text,
  Button,
  Label
} from 'native-base';
import { encrypt, decrypt } from 'react-native-simple-encryption';

let enc = null;
let dec = null;
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Hello World!',
    };
  }

  _doEnc() {
    enc = encrypt('key123', this.state.data);
    console.log('Encrypted:', enc);
    this.setState({ data: enc, });
  }

  _doDec() {
    dec = decrypt('key123', enc);
    console.log('Decrypted:', dec);
    this.setState({ data: dec, });
  }

  render() {
    return (
      <View style={
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        <Label style={
          {
            paddingBottom: 10,
            color: 'grey',
          }}>Encrypt Decrypt using key: 'key123'</Label>
        <Text style={
          {
            paddingBottom: 10,
          }}>{this.state.data}</Text>
        <Button block danger onPress={this._doEnc.bind(this)}
          style={
            {
              marginBottom: 5,
            }}>
          <Text >Do Encryption</Text>
        </Button>
        <Button block success onPress={this._doDec.bind(this)}
          style={
            {
              marginTop: 5,
            }}>
          <Text >Do Decryption</Text>
        </Button>
      </View>
    );
  }
}

export default Main;
