window.onscroll = function() {
    scrollFunction(),
        scrollrFunction(),
        roomFunction(), cardFunction(), card1Function(), card2Function()
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("logol").style.top = "-0.5px";
        document.getElementById("navbarl").style.top = "0px";
        document.getElementById("clearHeader").style.top = "-300px";
        // document.getElementById("book").style.right = "100px";
    } else {
        document.getElementById("navbarl").style.top = "-110px";
        document.getElementById("clearHeader").style.top = "0";
        document.getElementById("logol").style.top = "-110px";
        // document.getElementById("book").style.right = "15px";
    }
}

function scrollrFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("bookl").style.right = "145px";
    } else {
        document.getElementById("bookl").style.right = "-10px";
    }
}

function cardFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("room-card").style.bottom = "0px";
        document.getElementById("room-card1").style.bottom = "0px";
    } else {
        document.getElementById("room-card").style.bottom = "-500px";
        document.getElementById("room-card1").style.bottom = "-500px";
    }
}

function card1Function() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1300) {
        document.getElementById("room-card2").style.bottom = "0px";
        document.getElementById("room-card3").style.bottom = "0px";
    } else {
        document.getElementById("room-card2").style.bottom = "-500px";
        document.getElementById("room-card3").style.bottom = "-500px";
    }
}

function roomFunction() {
    if (document.body.scrollTop > 2600 || document.documentElement.scrollTop > 2600) {
        document.getElementById("bayang-room").style.top = "0";
        document.getElementById("our-room").style.opacity = "100%";
    } else {
        document.getElementById("bayang-room").style.top = "300px";
        document.getElementById("our-room").style.opacity = "1%";
    }
}

function card2Function() {
    if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
        document.getElementById("room-card4").style.left = "0px";
        document.getElementById("room-card5").style.right = "0px";
    } else {
        document.getElementById("room-card4").style.left = "-900px";
        document.getElementById("room-card5").style.right = "-900px";
    }
}