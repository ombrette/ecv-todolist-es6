params => expression;
// function (params) {
//   return expression;
// }
(title, value) => expression;
// function(title, value) {
//   return expression;
// }
var nb = [1, 2].map(v => v + 1);
console.log(nb); //[2,3]
  
var nb = [1, 2].map((v, index) => v + index);
console.log(nb); //[1,3]
