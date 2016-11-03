var openWidth = 250;
var closedWidth = 50;
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = openWidth+"px";
    document.getElementById("header").style.left = openWidth+"px";
    //alert(document.getElementsByTagName("header").offsetWidth);
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = closedWidth+"px";
    document.getElementById("header").style.left = closedWidth+"px";
}