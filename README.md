# react-native-simple-encryption
[![NPM version](https://img.shields.io/npm/v/react-native-simple-encryption.svg?style=flat-square)](https://www.npmjs.com/package/react-native-simple-encryption)

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
