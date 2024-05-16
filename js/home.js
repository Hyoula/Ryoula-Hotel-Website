window.onscroll = function() { scrollFunction(), scrollrFunction(), aboutFunction(), balkonFunction(), poolFunction(), cardFunction() };


function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("logo").style.top = "-0.5px";
        document.getElementById("navbarr").style.top = "0px";
        document.getElementById("clearHeader").style.top = "-300px";
        // document.getElementById("book").style.right = "100px";
    } else {
        document.getElementById("navbarr").style.top = "-110px";
        document.getElementById("clearHeader").style.top = "0";
        document.getElementById("logo").style.top = "-110px";
        // document.getElementById("book").style.right = "15px";
    }
}

function aboutFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("bayang-bout").style.right = "0";
        document.getElementById("about-us").style.left = "0";
        document.getElementById("h6").style.opacity = "100%";
    } else {
        document.getElementById("bayang-bout").style.right = "800px";
        document.getElementById("about-us").style.left = "800px";
        document.getElementById("h6").style.opacity = "1%";
    }
}

function scrollrFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("book").style.right = "145px";
        document.getElementById("bayang-room").style.top = "0";
        document.getElementById("our-room").style.opacity = "100%";
    } else {
        document.getElementById("book").style.right = "-10px";
        document.getElementById("bayang-room").style.top = "300px";
        document.getElementById("our-room").style.opacity = "1%";
    }
}

function balkonFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("b-img").style.opacity = "100%";
        document.getElementById("t-balkon").style.right = "10vw";
    } else {
        document.getElementById("b-img").style.opacity = "1%";
        document.getElementById("t-balkon").style.right = "-800px";
    }
}

function poolFunction() {
    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
        document.getElementById("p-img").style.opacity = "100%";
        document.getElementById("t-pool").style.left = "7vw";
    } else {
        document.getElementById("p-img").style.opacity = "1%";
        document.getElementById("t-pool").style.left = "-800px";
    }
}

function cardFunction() {
    if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
        document.getElementById("room-card").style.top = "0px";
        document.getElementById("room-card2").style.top = "0px";
        document.getElementById("room-card1").style.bottom = "0px";
    } else {
        document.getElementById("room-card").style.top = "-100px";
        document.getElementById("room-card2").style.top = "-100px";
        document.getElementById("room-card1").style.bottom = "-100px";
    }
}