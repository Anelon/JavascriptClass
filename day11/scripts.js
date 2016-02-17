/*var count = 1;
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
})*/

/*document.getElementById("myul").addEventListener("click", function (evt) {
    console.log(this);
    console.log(evt);
    alert(event.target.id)
});*/

// create our cup object using dot notation
var myCup = new Object();
myCup.color = "black";
myCup.type = "mug";
myCup.status = "full";
myCup.content = "coffee"; 
myCup.clean = false;

// add a pour method to the cup Object
myCup.pour = function pour() {
        if(this.status === "full") {
               this.status = "half-full";
        } else {
               this.status = "empty";
               this.content = "Air";
        }
        return this.status;
}

myCup.fill = function fill() {
    this.status = "full";
    this.clean = false;
    var fillLiquid = prompt("What do you want to fill the cup with?");
    if (fillLiquid) {
        if (fillLiquid[0] !== fillLiquid[0].toUpperCase()) fillLiquid = fillLiquid[0].toUpperCase() + fillLiquid.slice(1);
        this.content = fillLiquid;
    } else this.content = "Air";
    return myCup;
}

myCup.cleanCup = function cleanCup() {
    if (this.clean) console.log("This cup is already clean.");
    else {
        console.log("You cleaned the cup");
        this.status = "empty";
        this.content = "Air"
        this.clean = true;
    }
    return myCup;
}

var myCup2 = {};
myCup2["color"] = "black";
myCup2["type"] = "mug";
myCup2["status"] = "full";
myCup2["content"] = "coffee";

var myCup3 = {color: "black", type: "mug", status: "full", content: "coffee"};

