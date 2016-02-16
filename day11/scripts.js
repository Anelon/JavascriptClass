var count = 1;
var addButton = document.createElement("button");
addButton.innerHTML = "Add item";
var div = document.createElement("div");
div.setAttribute("style", "border-radius: 10px;background: #808080;margin: 16px;padding: 5px; width:50px; min-height: 100px;");
document.body.appendChild(addButton);
document.body.appendChild(div);

addButton.addEventListener("click", function() {
    var item = document.createElement("p");
    item.setAttribute("style", "background: black; color: white; padding: 2px; text-align: center")
    item.innerHTML = count;
    div.appendChild(item);
    count++;
    item.addEventListener("click", function() {
        div.removeChild(item);
    })
})