function changeBackground(skill) {
    var backgroundColor;
    var body = document.body.style;
    switch (skill) {
        case "software":
            makeItRain();
            break;
        case "photography":
            backgroundColor = "#FF0";
            break;
        case "music":
            backgroundColor = "#0000FF";
            break;
        case "default":
            backgroundColor = "#555555";
            break;
        default:
            backgroundColor = "#555555";
    }
    body.background = backgroundColor;
}

var makeItRain = function () {

    //clear out everything
    //$('.rain').empty();

    var increment = 0;
    var drops = "";

    while (increment < 100) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 5 and 2
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops += '<div class="drop" style="left: ' + increment
            + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100)
            + '%; animation-delay: 0.' + randoHundo 
            + 's; animation-duration: 0.5' + randoHundo 
            + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo 
            + 's; animation-duration: 0.5' + randoHundo 
            + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo 
            + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
}

makeItRain();