# Mongoctr

Mongoctr is an easy tool for mongodb in Node.js

## Installation
First install [Node.js](https://nodejs.org/en/) and [mongodb](https://www.mongodb.com/download-center). Then:
```sh
$ npm install mongodb-control
```
## Example

### Provide a url to connect to mongodb
```js
var mongoctr = require('mongoctr');
 
var url = 'mongodb://localhost:27017/my_database';
```
### API
#### insert
You can insert one or more data.
```js
mongoctr.insert(url, 'mycollection', {'name':'smith'});
```

#### update
```js
mongoctr.update(url, 'mycollection', {'name':'smith'}, {'age': '30'});
```

#### delete
```js
mongoctr.delete(url, 'mycollection', {'age': '30'});
```

#### find
```js
mongoctr.find(url, 'mycollection');
```