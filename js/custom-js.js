function changeBackground(skill) {
    var backgroundColor;
    var body = document.body.style;
    switch (skill) {
        case "software":
            backgroundColor = "white";
            break;
        case "photography":
            backgroundColor = "yellow";
            break;
        case "music":
            backgroundColor = "blue";
            break;
        case "default":
            backgroundColor = "#555555";
            break;
        default:
            backgroundColor = "#555555";
    }
    body.background = backgroundColor;
}