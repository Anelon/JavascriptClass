//set up variables
var toDo = ["Work", "School", "Homework", "Trash"];
var boxDiv = document.createElement("div");
document.body.appendChild(boxDiv);
boxDiv.setAttribute("style", "border-radius: 10px;background: #808080;margin: 16px;padding: 5px; width: 500px;");

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


//check if there is something to be added to the todo
enterToDo.addEventListener("click", function() {
    var addToDo = document.getElementById('setToDo').value;
    addToDo = addToDo[0].toUpperCase() + addToDo.slice(1);
    toDo.push(addToDo);
    setToDo.value = "";
    //print out the todo
    print();
})

//print each item to do
function append(item) {
    console.log(toDo[item]);
    var div = document.createElement("div");
    div.setAttribute("id", "div");
    console.log(item);
    console.log(toDo.length);
    if (item == 0) div.setAttribute("style", "border-style: solid; border-width: 2px; border-top-width: 4px;");
    else if (item == toDo.length - 1) div.setAttribute("style", "border-style: solid; border-bottom-width: 4px;");
    else div.setAttribute("style", "border-style: solid;border-width: 2px;");
    
    
    var list = document.createElement("li");
    list.setAttribute("style", "float: left;");
    
    var delButton = document.createElement("button");
    delButton.innerHTML = "Delete";
    delButton.setAttribute("style", "float: right;")
    delButton.setAttribute("id", item);
    
    var checkOffButton = document.createElement("input");
    checkOffButton.setAttribute("type", "checkbox");
    checkOffButton.setAttribute("style", "float: left;");
    
    var br = document.createElement("br");
    
    list.textContent = toDo[item];
    list.setAttribute("style", "float: left; color: white;");
    listCase.appendChild(div);
    div.appendChild(checkOffButton);
    div.appendChild(list);
    div.appendChild(delButton);
    div.appendChild(br);
    
    delButton.addEventListener("click", function () {
        console.log(event.target);
        for (var i = 0; i < toDo.length; i++) {
            if (i == event.target.id) {
                toDo.splice(i, 1);
            }
        }
        var pos = 500;
        var id = setInterval(animateDel, 5);
        function animateDel() {
            if (pos == 0) {
                clearInterval(id);
            } else if (pos % 50 < 25) {
                pos--;
                
            } else {
                pos--;
                
            }
        }

        print();
    })
    
    checkOffButton.addEventListener("click", function() {
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
    listCase.textContent = "";
    for (var i = 0; i < toDo.length; i ++) {
        append(i);
    }
}