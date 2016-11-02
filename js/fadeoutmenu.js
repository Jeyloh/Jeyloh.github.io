
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementByTag("header").style.marginLeft = "300px";
    alert(document.getElementByTag("header").offsetWidth);
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementByTag("header").style.marginLeft = "50px";
}