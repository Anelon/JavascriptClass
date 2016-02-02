/* JavaScript Test Code Template
   Corey Shuman
   11/4/15
   
   This files contains some shortcut functions
   to manipulate the values for two input textboxes.
   It also sets up an event handler to handle
   button clicks on the page.
*/

// USER CODE - Put your code here!
var arrayToBe = [];

function pushToArray() {
    //first input added to array end
    if (domInput1()) arrayToBe.push(domInput1());
    //second input added to array begining
    if (domInput2()) arrayToBe.splice(0,0,domInput2());
    // third input to array middle
    if (domInput3()) arrayToBe.splice(parseInt(arrayToBe.length/2),0,domInput3());
    //output to box
    domTextOutput(arrayToBe.join(", "));
    //clear input boxes
	domInput2("");
	domInput1("");
	domInput3("");
}

// This function is called every time the button is clicked
function handleGoButtonClick(event) {
	pushToArray();
}



// HELPER FUNCTIONS - The following code is helper functions to get you started

// This function sets and returns the value of Input 1
function domInput1(newval) {
	var input1Reference = document.getElementById("input1Id");
	if(newval !== undefined) {
		input1Reference.value = newval;
	}
	return input1Reference.value;
}

// This function sets and returns the value of Input 2
function domInput2(newval) {
	var input2Reference = document.getElementById("input2Id");
	if(newval !== undefined) {
		input2Reference.value = newval;
	}
	return input2Reference.value;
}

function domInput3(newval) {
    var input3Reference = document.getElementById("input3Id");
    if(newval !== undefined) {
        input3Reference.value = newval;
    }
    return input3Reference.value;
}

// This function sets and returns the value of Input 2
function domTextOutput(newval) {
	var textOutputReference = document.getElementById("textOutputId");
	if(newval !== undefined) {
		textOutputReference.innerHTML = newval;
	}
}

/* This is an Immediately Invoked Function Expression (IIFE)
   The code here runs immediately after the page loads.
   In this case, we are setting up an event handler for
   button presses.
*/
(function() {
	document.getElementById("goBtnId").onclick = handleGoButtonClick;
}());