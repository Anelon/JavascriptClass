//squares a number
function square(num) {
    if (typeof num == "number") return num * num;
    else return NaN;
}
//capitalizes the first leter adds a period if there was not one previously
function makeSentance(sentance) {
    if (sentance && typeof sentance == "string") {
        if (sentance[sentance.length - 1] == ".") return sentance[0].toUpperCase() + sentance.slice(1);
        else return sentance[0].toUpperCase() + sentance.slice(1) + ".";
    } else return "";
}

function stringHalfFlip(string) {
    if (typeof string && string == "string" && string.length % 2 == 0 && string.length > 2) {
        return string.substr(string.length / 2) + string.substr(0, string.length / 2);
    } else if (typeof string && string == "string" && string.length % 2 != 0 && string.length > 3) {
        return string.substr(parseInt(string.length / 2) + 1) + string[parseInt(string.length / 2)] + string.substr(0, parseInt(string.length / 2));
    } else if ( typeof string && string == "string" && string.length % 2 != 0) {
        return string;
    } else return "";
}

function halfFlipOdd(string) {
    if (typeof string && string == "string" && string.length % 2 != 0 && string.length > 3) {
        return string.substr(parseInt(string.length / 2) + 1) + string[parseInt(string.length / 2)] + string.substr(0, parseInt(string.length / 2));
    } else if (string.length % 2 == 0) {
        console.log("Use halfFlipEven instead");
        return "";
    } else return "";
}

function average(numArray) {
    if (Array.isArray(numArray) == "object" && numCheck(numArray) ) {
        var sum = 0;
        for (var i = 0; i < numArray.length; i++) {
            sum = sum + parseInt(numArray[i]);
        }
        return sum / numArray.length;
    } else return NaN;
}
//function to check if items in an array are numbers
function numCheck(numArray) {
    var numTest = false;
    for (var i = 0; i < numArray.length; i++) {
        if (!isNaN(numArray[i])) {
            numTest = true;
            console.log("true");
        }
        else return false;
    }
    return true;
}