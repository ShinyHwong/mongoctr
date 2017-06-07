# Mongoctr

Mongoctr 是一个 MongoDB 基本操作进行了封装的包。

## 安装
首先安装 [Node.js](https://nodejs.org/en/) 和 [mongodb](https://www.mongodb.com/download-center)。 然后:
```sh
$ npm install mongodb-control
```
## 示例

### 提供 MongoDB 数据库的地址
```js
var mongoctr = require('mongoctr');
 
var url = 'mongodb://localhost:27017/my_database';
```
### API
#### 插入
你可以插入一条或多条数据。
```js
/**
 * 插入数据
 * 参数1：数据库地址，参数2：集合名称
 * 参数3：需要插入的数据
 */
mongoctr.insert(url, 'mycollection', {'name':'smith'});
```

#### 更新
```js
/**
 * 更新数据
 * 参数1：数据库地址，参数2：集合名称
 * 参数3：定位数据，参数4：需要更新的数据
 * 参数5：更新一条或多条数据，默认false，更新多条
 */
mongoctr.update(url, 'mycollection', {'name':'smith'}, {'age': '30'});
```

#### 删除
```js
/**
 * 删除数据
 * 参数1：数据库地址，参数2：集合名称
 * 参数3：需要删除的数据， 参数4：删除一条或多条数据，默认false，删除多条
 */
mongoctr.delete(url, 'mycollection', {'age': '30'});
```

#### 查找
```js
/**
 * 查找数据
 * 参数1：数据库地址，参数2：集合名称
 * 参数3：需要查找数据，不输入查找所有数据，可选
 * 参数4：回调函数，可以利用返回的数据数组。可选
 */
mongoctr.find(url, 'mycollection', {'name':'smith'}, function(result){...});
```