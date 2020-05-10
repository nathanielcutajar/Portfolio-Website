function changeBackground(skill) {
    var backgroundColor;
    var body = document.body.style;
    $('.animations').empty();
    switch (skill) {
        case "software":
            document.getElementById("software").style.filter = "opacity(100%)";
            document.getElementById("photography").style.filter = "opacity(40%)";
            document.getElementById("music").style.filter = "opacity(40%)";
            backgroundColor = "#225533";
            break;
        case "photography":
            document.getElementById("software").style.filter = "opacity(40%)";
            document.getElementById("photography").style.filter = "opacity(100%)";
            document.getElementById("music").style.filter = "opacity(40%)";
            backgroundColor = "#552233";
            break;
        case "music":
            document.getElementById("software").style.filter = "opacity(40%)";
            document.getElementById("photography").style.filter = "opacity(40%)";
            document.getElementById("music").style.filter = "opacity(100%)";
            backgroundColor = "#332255";
            break;
        default:
            document.getElementById("software").style.filter = "opacity(100%)";
            document.getElementById("photography").style.filter = "opacity(100%)";
            document.getElementById("music").style.filter = "opacity(100%)";
            makeItRain();
    }
    body.background = backgroundColor;
}

function makeItRain () {

    document.body.style.background = "#222222";

    var increment = 0;
    var drops = "";

    while (increment < 90) {
        var randoHundo = (Math.floor(Math.random() * (98) + 1));
        var randoFiver = (Math.floor(Math.random() * (4) + 2));
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops += '<div class="drop" style="left: ' + increment
            + '%; bottom: ' + ((randoFiver * 2) + 100)
            + '%; animation-delay: 0.' + randoHundo
            + 's; animation-duration: 1.5' + randoHundo
            + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo
            + 's; animation-duration: 1.5' + randoHundo
            + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo
            + 's; animation-duration: 1.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
}

function test() {
    const wrapperEl = document.querySelector('.wrapper');
    const numberOfEls = 90;
    const duration = 6000;
    const delay = duration / numberOfEls;

    let tl = anime.timeline({
        duration: delay,
        complete: function () { tl.restart(); }
    });

    function createEl(i) {
        let el = document.createElement('div');
        const rotate = (360 / numberOfEls) * i;
        const translateY = -50;
        const hue = Math.round(360 / numberOfEls * i);
        el.classList.add('el');
        el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
        el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
        tl.add({
            begin: function () {
                anime({
                    targets: el,
                    backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
                    rotate: [rotate + 'deg', rotate + 10 + 'deg'],
                    translateY: [translateY + '%', translateY + 10 + '%'],
                    scale: [1, 1.25],
                    easing: 'easeInOutSine',
                    direction: 'alternate',
                    duration: duration * .1
                });
            }
        });
        wrapperEl.appendChild(el);
    };

    for (let i = 0; i < numberOfEls; i++) createEl(i);
}