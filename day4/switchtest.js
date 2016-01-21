

var condition = "foo";

switch (condition) {
    case "foo":
        console.log("foo");
        break;
    case "bar":
        console.log("bar");
        break;
    default:
        console.log("Was neither foo nor bar");
}

var c2 = 1;
switch (c2) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        console.log("nothing");
}


var invert = true;
var num = 10;
var result = invert ? -num : num;
console.log(result);


var strA = "0123456789";
//code to set strB to "456"
var strB = strA.substring(4,7);

var str1 = "airplane";
// sets well... to upercase
var str2 = str1.toLocaleUpperCase();
var length = str1.length;


function log(str) {
    str = str.toUpperCase();
    str = str.trim();
    console.log(str);
    return str
}

log("so much better than typing console.log")