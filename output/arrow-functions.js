"use strict";

(function (params) {
  return expression;
});
// function (params) {
//   return expression;
// }
(function (title, value) {
  return expression;
});
// function(title, value) {
//   return expression;
// }
var nb = [1, 2].map(function (v) {
  return v + 1;
});
console.log(nb); //[2,3]

var nb = [1, 2].map(function (v, index) {
  return v + index;
});
console.log(nb); //[1,3]