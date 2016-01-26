"use strict"
var toDo = [];

addDo();

alert("Program end.")
if ((toDo)) console.log(toDo);
else console.log("Wow nothing to do?");


function addDo() {
    var addToDo = prompt("Add an item to do. If you don't have anything to do enter 0.");
    
    if (addToDo && addToDo != 0) {
        toDo.push(addToDo);
        alert(toDo);
        console.log(addToDo);
        addDo();
    } else if (addToDo == 0) {
        
    } else {
        alert("Please add a valid item to do, or enter 0 to end the program.")
        addDo();
    }
}