// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let string = '';


  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  if (Array.isArray(obj)) {
    var arr = [];
    for (let i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return `[${arr}]`;
  }
  if (typeof obj === 'object') {
    var obz = '';
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    for (var key in obj) {
      if (typeof key !== 'function' && key !== undefined && typeof obj[key] !== 'function' && obj[key] !== undefined) {
        obz += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    var slicedObz = obz.slice(0, obz.length - 1);
    return '{' + slicedObz + '}';
  }
};