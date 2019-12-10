// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let result = [];

  var bodyCall = function(element) {
    // base case, check the class element has the className
    if (element.classList && element.classList.contains(className)) {
      // push to result
      result.push(element);
    }
    // check for childnodes
    // loop through childNodes length
    for (let i = 0; i < element.childNodes.length; i++) {
      // bodyCall
      bodyCall(element.childNodes[i]);
    }
  };


  bodyCall(document.body);
  return result;
};
