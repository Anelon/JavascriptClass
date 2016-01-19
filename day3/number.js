//number prompts
var num1 = prompt("Give me a number");
var num2 = prompt("Give me another number");

if ( !isNaN(num1) && !isNaN(num2) ) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var sum = num1 + num2;
    alert(sum);
} else console.log("Input Error");

//sums
