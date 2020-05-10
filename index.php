<!DOCTYPE html>
<html lang="en">

<head>
    <?php include 'common/header.php'?>
    <!--Page-Specific Items-->
    <title>Nathaniel Cutajar</title>
</head>

<body onload="makeItRain()">
    <div class="flex-container">
        <a href="./software/index.html" onmouseover="changeBackground('software')"
            onmouseout="changeBackground('default')">
            <div id="software">
                <img src="./images/index/Portfolio-Skill.jpg" title="Software" alt="Software" class="img-fluid">
            </div>
        </a>
        <a href="./photography/index.html" onmouseover="changeBackground('photography')"
            onmouseout="changeBackground('default')">
            <div id="photography">
                <img src="./images/index/Portfolio-Skill.jpg" title="Photography" alt="Photography" class="img-fluid">
            </div>
        </a>
        <a href="./music/index.html" onmouseover="changeBackground('music')" onmouseout="changeBackground('default')">
            <div id="music">
                <img src="./images/index/Portfolio-Skill.jpg" title="Music" alt="Music" class="img-fluid">
            </div>
        </a>
    </div>

    <div class="animations rain front-row wrapper"></div>
</body>

</html>