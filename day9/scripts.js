var anchors = document.querySelectorAll("ul li a");
        console.log(anchors);
        console.log(anchors.length);
        
    for (var i = 0; i < anchors.length; i++) {
           var anchor = anchors.item(i);
            console.log(anchor.href);
    }
