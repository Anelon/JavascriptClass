function num2arr(num1,num2) {
    var numarray = [num1 + num2, num1 * num2];
    return numarray;
}

function numCompare(num1,num2) {
    if (num1 < num2) return "smaller";
    else if (num2 < num1) return "bigger";
    else return "same";
}

function runFizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        console.log(fizzBuzz(i));
    }
}

function fizzBuzz(num) {
    if (num%3 == 0 && num%5 == 0) return "FizzBuzz";
    else if (num%3 == 0) return "fizz";
    else if (num%5 == 0) return "buzz";
    else return num;
}

function isCaps(str) {
    if (str[0] === str[0].toUpperCase()) return true;
    else return false;
}

function str2Array(str) {
    var strArray = [];
    for (var i = 0; i < str.length; i++) {
        strArray.push(str[i]);
    }
    return strArray;
}

function sortNum(numArray) {
    var temp = 0;
    for (var i = numArray.length; i >= 0; i--) {
        for (var t = 0; t < i; t++) {
            if (numArray[i] < numArray[t]) {
                temp = numArray[i];
                numArray[i] = numArray[t];
                numArray[t] = temp;
            }
        }
    }
    return numArray;
}