"use strict"
var toDo = [];

var i = 0;

var addToDoDiv = document.createElement("div");

var listedToDo = document.createElement("ol");
listedToDo.setAttribute("class", "list");

var setToDo = document.createElement("input");
setToDo.setAttribute('id', 'setToDo');
setToDo.placeholder = "To Do";

var enterToDo = document.createElement("button");
enterToDo.innerHTML = "Add Item";

var enterToDo = document.createElement("button");
enterToDo.innerHTML = "Enter";

var editButton = document.createElement("button");
editButton.innerHTML = "Edit";

var delButton = document.createElement("button");
delButton.innerHTML = "Delete";

var checkOffButton = document.createElement("input");
checkOffButton.setAttribute("type", "checkbox");

document.body.appendChild(setToDo);
document.body.appendChild(enterToDo);



function addDo() {
    var addToDo = document.getElementById('setToDo').value;
    if (addToDo) {
        toDo.push(addToDo);
        printToDo();
    } else {
        alert("Please add a valid item to do.")
    }
}

enterToDo.addEventListener('click', function() {
    if (toDo) document.body.appendChild(listedToDo);
    addDo();
    //printToDo();    
})

function printToDo() {
    addList(i);
    i++;
    alert("list number " + i);
}

//use when deleting/editing an item
var anchors = document.querySelectorAll("li");

function addList(num) {
    var toDoItem = document.createElement("li");
    toDoItem.textContent = toDo[num];
    listedToDo.appendChild(toDoItem);
}
