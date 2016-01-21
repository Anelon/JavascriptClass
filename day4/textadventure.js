var win = false;
var enter = confirm("You are outside a forest cabin. Press OK to enter");
if (enter) {
    var bowl = prompt("Upon entering the cabin you see three bowls of porridge. Eat bowl 1, 2, or 3?");
    switch (bowl) {
        case "1":
            console.log("The bowl was too hot!");
            break;
        case "2":
            console.log("The bowl was too cold!");
            break;
        case "3":
            console.log("It's delicious!");
            var hours = "The porridge makes you sleepy. Nap for how many hours?";
            var sleep = prompt(hours);
            sleep = Number(sleep);
            if ( sleep < 2 ) {
                console.log("You wake up just in time, and scamper away from the rustling you heard outside!");
                win = true;
            } else {
                console.log("You slept too long, and are eaten by the hungry bears.");
            }
            break;
        default:
            console.log("I see you have taken the path of starvation. Good luck with that.");
    }
} else {
    //didnt enter the cabin
    console.log("And thats the end.");
}

if (win) console.log("You win!");
else console.log("The End");