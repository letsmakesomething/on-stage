var onStage = (function(){

    var el = document.querySelectorAll(".on-stage"),
        triggerPosition = window.innerHeight / 2;

    // Fire events on scroll

    window.addEventListener("scroll", function(){

        for ( i = 0; i < el.length; i++ ) {

            //console.log(el[i].offsetTop);

            if ( el[i].offsetTop < ( window.scrollY + triggerPosition ) ) {

                console.log("Boomshakalaka!");

                if (el[i].className != "on-stage action") {
                    el[i].className = "on-stage action";
                }
            } else {
                el[i].className = "on-stage";
            }

        }

    });

}());