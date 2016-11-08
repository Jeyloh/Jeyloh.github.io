var openWidth = 200;
var closedWidth = 5;
var scrollHeight = 150;

/* JQUERY
$(document).ready(function() {
    $("mobile-sidenav").hover(function () {
        $("mobile-sidenav").animate({width:'toggle'},openWidth);
    });

})*/

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mobile-sidenav").style.width = openWidth+"px";
    document.getElementById("header").style.left = openWidth+"px";
    //alert(document.getElementsByTagName("header").offsetWidth);
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mobile-sidenav").style.width = closedWidth+"px";
    document.getElementById("header").style.left = closedWidth+"px";
}


window.onscroll = function() {headerScroll()};

function headerScroll(){

    var header = document.getElementById("header");
    var navBar = document.getElementById("computer-navbar");
    var sm = document.getElementById("header-social-media-buttons");
    var sidenav = document.getElementById("mobile-sidenav");
    var main = document.getElementById("main");

    // FAAACKIN AWESOME!!!!
    var originalHeader = header;
    var originalNav = navBar;
    var originalSm = sm;
    var originalSidenav = sidenav;
    var originalMain = main;

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.style.height = scrollHeight+"px";
        //header.style.backgroundImage = "url('')";
        //header.style.backgroundColor = "black";

        main.style.marginTop = header.style.offsetHeight;
        console.log((main.style.marginTop));
        //sm.style.display = "none";
        //navBar.style.display = "none";


    }
    else { // This is activated when the scroll is back up again
        header.style = originalHeader;
        navBar.style = originalNav;
        sm.style = originalSm;
        sidenav.style = originalSidenav;
        main.style = originalMain;
        console.log((main.style.marginTop));

    }
}