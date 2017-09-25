# react-native-simple-encryption
[![npm version](https://badge.fury.io/js/react-native-simple-encryption.svg)](https://badge.fury.io/js/react-native-simple-encryption)
[![GitHub issues](https://img.shields.io/github/issues/BhavanPatel/react-native-simple-encryption.svg)](https://github.com/BhavanPatel/react-native-simple-encryption/issues)
[![GitHub forks](https://img.shields.io/github/forks/BhavanPatel/react-native-simple-encryption.svg)](https://github.com/BhavanPatel/react-native-simple-encryption/network)
[![GitHub stars](https://img.shields.io/github/stars/BhavanPatel/react-native-simple-encryption.svg)](https://github.com/BhavanPatel/react-native-simple-encryption/stargazers)

[![NPM](https://nodei.co/npm/react-native-simple-encryption.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-simple-encryption/)

Simple XOR and base_64 encryption decryption for react-native

### Installation in project
```bash
npm install react-native-simple-encryption --save
```
### Demo
###### iOS
![SzEW63](http://i.makeagif.com/media/5-28-2017/SzEW63.gif)

###### Android
![Uv9dKl](http://i.makeagif.com/media/5-28-2017/Uv9dKl.gif)


### Example
##### [example here](https://github.com/BhavanPatel/react-native-simple-encryption/tree/master/Example)

### Sample usage
```javascript
...

import { encrypt, decrypt } from 'react-native-simple-encryption';

...

// encrypt('key','data_to_be_encrypt');
encrypt('key123', 'Hello World');

...

// decrypt('key','encrypted_data');
decrypt('key123', 'IwAVXV0TPAoLXVYS');
```
