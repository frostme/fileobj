fileobj
=======

Node.js module to handle saving, serializing, and reading an object to and from a file.


## Installation

```
npm install fileobj
```

## Usage

### Instantiation
dirname is the directory name where you plan on storing the file data.

```js
var fileObj = require('fileobj')(dirname);
```

### Save

```js
fileObj.save(obj, cb);
```

- _obj_ : javascript object to be saved to file.
- _cb_ : callback that accepts two parameters, err and id (id of the file, used to open).

### Read

```js
fileObj.read(id, cb);
```

- _id_ : id of the file you wish to open.
- _cb_ : callback that accepts two parameters, err and object (object read).

### All
```js
fileObj.all(cb);
```

- _cb_ : callback that accept two parameters, err ids (array of id's of all files).

## Author
M. Elliot Frost, CEO and President of [Frostware Technical Solutions, LLC](http://www.frostwaresolutions.net)


