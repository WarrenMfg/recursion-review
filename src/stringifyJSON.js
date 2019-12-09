// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let string = '';




  if (typeof obj === 'number') {
    return '' + obj;
  }
  if (obj === null) {
    return '' + obj;
  }
  if (typeof obj === 'boolean') {
    return '' + obj;
  }
  // if Array.isArray
  //for loop




  // if typeof obj === 'object'
  //for in loop


  //

  return stringifyJSON(obj);
  //functions and undefined
};