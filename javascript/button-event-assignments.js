/* const menuList = document.getElementById("menu-list"); */

menuBtn.onclick = function () {
    if(!menuBtn.classList.contains("showContent")) {
        menuBtn.classList.add("showContent");
        menuList.style.display = "flex";
        menuList.style.top = (fixedContainerDimensions( document.getElementById("header") ).height) + "px";
        menuList.style.backgroundColor = "#242324";
    } else {
        menuBtn.classList.remove("showContent");
        menuList.style.display = "none";
        menuList.style.backgroundColor = "#302f2f";
    }
};