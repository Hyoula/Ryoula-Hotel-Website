window.onscroll = function() {
    scrollFunction(),
        scrollrFunction(),
        newsFunction(), roomFunction(), b1(), c1(), d1()
};

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
        document.getElementById("a1").style.top = "0px";
        document.getElementById("a2").style.top = "0px";
        document.getElementById("a3").style.left = "0px";
    } else {
        document.getElementById("a1").style.top = "300px";
        document.getElementById("a2").style.top = "300px";
        document.getElementById("a3").style.left = "500px";
    }
}

function b1() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("b1").style.opacity = "100%";
    } else {
        document.getElementById("b1").style.opacity = "0%";
    }
}


function roomFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("bayang-room").style.top = "0";
        document.getElementById("our-room").style.opacity = "100%";
        document.getElementById("contact").style.opacity = "100%";
    } else {
        document.getElementById("bayang-room").style.top = "300px";
        document.getElementById("our-room").style.opacity = "1%";
        document.getElementById("contact").style.opacity = "1%";
    }
}

function c1() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        document.getElementById("gambar").style.top = "0px";
    } else {
        document.getElementById("gambar").style.top = "500px";
    }
}

function d1() {
    if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
        document.getElementById("view").style.top = "0px";
    } else {
        document.getElementById("view").style.top = "300px";
    }
}