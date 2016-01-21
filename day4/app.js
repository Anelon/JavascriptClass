var num1 = prompt("Give me a number.");
var num2 = prompt("Give me another number.");
if ( (parseInt(num1)) && (parseInt(num2)) ) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var product = num1 * num2;
    alert("The two numbers multiplied by eachother is " + product + ".");
    if (num2 != 0) {
        var divide = num1 / num2;
        alert("The two numbers divided by eachother is " + divide + ".");
    } else alert("Invalid division.")
} else {
    alert("Invalid input please try again.");
}
