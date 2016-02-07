var dinoMass = [];
var dinoCount;
var dinoIncrement = 0;

//set up initial page
var getNumberDinos = document.createElement("input");
getNumberDinos.setAttribute('id', 'numberDino');
getNumberDinos.placeholder = "Enter number of Dinos";

var enterNumberDinos = document.createElement("button");
enterNumberDinos.innerHTML = "Enter";

//set up page atributes and elements for dino input
var getTypeDino = document.createElement("input");
getTypeDino.setAttribute('id', 'typeDino');
getTypeDino.placeholder = "Name of Dino";

var getEraDino = document.createElement("input");
getEraDino.setAttribute('id', 'eraDino');
getEraDino.placeholder = "Era of Dino";

var getFoodDino = document.createElement("input");
getFoodDino.setAttribute('id', 'foodDino');
getFoodDino.placeholder = "Food of Dino";

var enterDino = document.createElement("button");
enterDino.innerHTML = "Enter Dino";
var dinoHolder = document.createElement("div");

//add to page
document.body.appendChild(getNumberDinos);
document.body.appendChild(enterNumberDinos);

//waits for the entering of number
enterNumberDinos.addEventListener('click', function() {
    dinoCount = document.getElementById('numberDino').value;
    if (dinoCount) {
        getDinoInfo(dinoCount);
    }
});

//get input
function getDinoInfo(numDino) {
    //removes previous inputs
    document.body.removeChild(getNumberDinos);
    document.body.removeChild(enterNumberDinos);
    //adds new input
    document.body.appendChild(getTypeDino);
    document.body.appendChild(getEraDino);
    document.body.appendChild(getFoodDino);
    document.body.appendChild(enterDino);
    document.body.appendChild(dinoHolder);
    
    //waits for dino to be entered
    enterDino.addEventListener('click', function() {
        dinoIncrement++; 
        //save inputs
        var typeDino = document.getElementById('typeDino').value;
        var eraDino = document.getElementById('eraDino').value;
        var foodDino = document.getElementById('foodDino').value;
        //set to array
        dinosaur(typeDino, eraDino, foodDino);
        //clear input
        getTypeDino.value = "";
        getEraDino.value = "";
        getFoodDino.value = "";
        printDino();
        //checks if you have reached the number of dinos
        if (dinoIncrement >= numDino) {
            //clears and then prints dinos
            document.body.removeChild(getTypeDino);
            document.body.removeChild(getEraDino);
            document.body.removeChild(getFoodDino);
            document.body.removeChild(enterDino);
            printDino();
        }
    });
    
}

function dinosaur(type, era, food) {
    dinoMass.push([type,era,food]);
}

function printDino() {
    var print = "<p>Your Dinos</p>";
    for (var i = 0; i < dinoMass.length; i++) {
        print += "<p> " + (i + 1) + ") ";
        for(var j = 0; j < 3; j++) {
            print += dinoMass[i][j] + " ";
        }
        print += "</p>"
    }
    dinoHolder.innerHTML = print;
}