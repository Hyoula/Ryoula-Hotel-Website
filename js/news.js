window.onscroll = function() {
    scrollFunction(),
        scrollrFunction(), newsFunction(), a2(), a3();
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

function newsFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("a1").style.top = "0";
        document.getElementById("b1").style.top = "0";
    } else {
        document.getElementById("a1").style.top = "500px";
        document.getElementById("b1").style.top = "300px";
    }
}

function a2() {
    if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
        document.getElementById("a2").style.top = "0";
    } else {
        document.getElementById("a2").style.top = "500px";
    }
}

function a3() {
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.getElementById("a3s").style.top = "0";
    } else {
        document.getElementById("a3s").style.top = "600px";
    }
}