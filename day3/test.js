var a = 6;
var b = 3;
a++;
b--;
var test1 = (a === b);
var test2 = (a > b);
console.log(test1 && test2);
console.log(test1 || test2);