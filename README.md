# react-native-simple-encryption
[![NPM version](http://img.shields.io/npm/v/count-lines-in-file.svg?style=flat-square)](https://www.npmjs.com/package/react-native-simple-encryption)

Simple XOR and base_64 encryption decryption for react-native

Installation in project
```bash
npm install react-native-simple-encryption --save
```

Sample usage
```javascript
...

import { encode, decode } from 'react-native-simple-encryption';

...

// encode('key','data_to_be_encrypt');
encode('key123', 'Hello World');

...

// decode('key','encrypted_data');
encode('key123', 'IwAVXV0TPAoLXVYS');
```
