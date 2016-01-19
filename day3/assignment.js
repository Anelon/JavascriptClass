"use strict"
var toDo = [];
var addToDo = prompt("Add an item to do.");

while (addToDo) {
    toDo[toDo.length] = addToDo;
    alert(toDo);
    console.log(addToDo);
    var addToDo = prompt("Add another item to do.");
}
alert("Program end.")
console.log(toDo);