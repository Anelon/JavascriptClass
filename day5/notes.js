//declaring array

var fruits = ["apple", "banana", "cherry", "strawberry"];
console.log(fruits);
console.log(fruits.lenght);

//add an item to the end of an array
/*
fruits.push("blackberry");
*/

//create array but does not store
/*
console.log([1, 2, 3, 4][2]);
*/

/*
//create an array to hold multiple arrays
var fruitColors = [];
var cherry = ["cherry", "red"];
var banana = ["banana", "yellow"];
var apple = ["apple", "green"];
 
//add all the fruit vars into the fruitColors array
fruitColors.push(cherry);
fruitColors.push(banana);
fruitColors.push(apple);
 
//console.log(fruitColors);

//we can access our array's based on index
console.log(fruitColors[0][1]);
console.log(fruitColors[1][1]);
console.log(fruitColors[2][1]);

var lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

fruits = ["apple", "cherry", "plum", "apricot"];
//array.slice(begin, [end])
console.log(fruits.slice(1, 3)); //doesn't modify original array.
console.log(fruits); //note, it's the same as the original array.

fruits = ["cherry", "apple", "banana", "plum"];
//array.splice(begin, howManyToRemove, "additional", "items", "to", "add");
fruits.splice(2, 1);
console.log(fruits);
*/

function capitalize(str) {
    if (!str || typeof str !== "string") {
        return str;
    }
 
    return str[0].toUpperCase() + str.slice(1);
}

    