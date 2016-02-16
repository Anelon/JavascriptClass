//set up variables
var toDo = ["Work", "School", "Homework", "Trash"];
var i = toDo.length;
var boxDiv = document.createElement("div");
document.body.appendChild(boxDiv);
boxDiv.setAttribute("style", "border-radius: 10px;background: #808080;margin: 16px;padding: 5px;");

//set up adding items to do
var addToDoDiv = document.createElement("div");
var setToDo = document.createElement("input");
setToDo.setAttribute('id', 'setToDo');
setToDo.placeholder = "To Do";
var enterToDo = document.createElement("button");
enterToDo.innerHTML = "Add Item";

//set up area for items
var toDoList = document.createElement("ol");
var listCase = document.createElement("div");
boxDiv.appendChild(listCase);
listCase.appendChild(toDoList);

boxDiv.appendChild(addToDoDiv);
addToDoDiv.appendChild(setToDo);
addToDoDiv.appendChild(enterToDo);

//check if there is anything already in todo
if (toDo) {
    for (var i = 0; i < toDo.length; i++) {
            append(i);
    }
}

//check if there is something to be added to the todo
enterToDo.addEventListener("click", function() {
    var addToDo = document.getElementById('setToDo').value;
    toDo.push(addToDo);
    setToDo.value = "";
    //print out the todo
    append(i);
    i++;
})

//print each item to do
function append(increment) {
    var div = document.createElement("div");
    div.setAttribute("id", "div");
    var list = document.createElement("li");
    list.setAttribute("style", "float: left;")
    var delButton = document.createElement("button");
    delButton.innerHTML = "Delete";
    delButton.setAttribute("style", "float: right;")
    var checkOffButton = document.createElement("input");
    checkOffButton.setAttribute("type", "checkbox");
    checkOffButton.setAttribute("style", "float: left;")
    var br = document.createElement("br");
    
    if (increment < 0) {
        //toDoList.removeChild(div);
        div.removeChild(checkOffButton);
        div.removeChild(list);
        div.removeChild(delButton);
        return;
    }
    list.textContent = toDo[increment];
    toDoList.appendChild(div);
    
    div.appendChild(checkOffButton);
    div.appendChild(list);
    div.appendChild(delButton);
    div.appendChild(br);
    
    delButton.addEventListener("click", function () {
        toDoList.removeChild(div);
        toDo.splice(increment, 1);
        print();
        i--;
        console.log("delete");
    })
    
    checkOffButton.addEventListener("click", function() {
        //console.log(checkOffButton.checked);
        for (var i = 0; i < toDo.length; i++) {
            if (checkOffButton.checked) {
                list.setAttribute("style", "float: left; text-decoration: line-through;");
            } else {
                list.setAttribute("style", "float: left; text-decoration: none;");
            }
        }
    })
}
    

function print() {
    //fix from printing old data and then new data
    for (var i = 0; i < toDo.length; i++) {
        append(-1);
    }
    listCase.removeChild(toDoList);
    listCase.appendChild(toDoList);
    for (var i = 0; i < toDo.length; i++) {
        append(i);
    }
}