(function(){
    //create elements
    var holder = document.createElement("div");
    var button = document.createElement("button");
    var input = document.createElement("input");
    var interval;
    //give elements text
    button.innerHTML = "Start";
    input.placeholder = "Set timer lenth (minutes)";
    //assign id and append to body
    input.setAttribute('id', 'input');
    document.body.appendChild(button);
    document.body.appendChild(input);
    document.body.appendChild(holder);
    //listen for click then run
    button.addEventListener('click', function() {
        clearInterval(interval);
        //get user input
        var value = document.getElementById('input').value;
        document.getElementById('input').value = '';
        //check if user input was blank
        if (value != '' && parseInt(value) > 0) {
            //run timer
            holder.innerHTML = '';
            var count = value * 60;
            //start timer, create values, show them, decrease couter
            interval = setInterval(function() {
                //create values
                var seconds = count % 60;
                var minutes = count / 60;
                var hours = (count/60)/60;
                
                //if input of minutes is more than 1 hour
                if (minutes >= 60) {
                    minutes = minutes % 60;
                }
                //print current time
                holder.innerHTML = Math.floor(hours) + "<br>hours<br>" + Math.floor(minutes)
                 + "<br>hours<br>" + seconds + "<br>seconds<br>";
                count--;
                
                //when timer runs out
                if (count == 0) {
                    holder.innerHTML = "DONE";
                    clearInterval(interval);
                }
            }, 1000)
        } else {
            //give nothing
            holder.innerHTML = '';
        }
    });
    
    
})();