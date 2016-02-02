(function(){
    //create elements
    var count = 0;
    
    function myClickUpHandler(event) {
        count++;
        document.getElementById("myCount").innerHTML = count;
        pyramidUpdate()
    }
    function myClickDownHandler(event) {
        if (count > 0) count--;
        document.getElementById("myCount").innerHTML = count;
        pyramidUpdate()
    }
    function myClickResetHandler(event) {
        count = 0;
        document.getElementById("myCount").innerHTML = count;
        pyramidUpdate()
    }
    function pyramidUpdate() {
        var pyramidStr = "";
        for (var row = 0; row < count; row++) {
            pyramidStr += "<p>";
                for (var collum = 0; collum <= row; collum++) {
                    pyramidStr += "# ";
                }
            pyramidStr += "</p>"
        }
        document.getElementById("myPyramid").innerHTML = pyramidStr;
    }
    document.addEventListener('keydown', function(event) {
        if (event.keyCode == 38) {
            myClickUpHandler();
        } else if (event.keyCode == 40) {
            myClickDownHandler();
        }
    }, true);
    document.getElementById("myBtnUp").onclick = myClickUpHandler;
    document.getElementById("myBtnDown").onclick = myClickDownHandler;
    document.getElementById("myBtnReset").onclick = myClickResetHandler;
})();