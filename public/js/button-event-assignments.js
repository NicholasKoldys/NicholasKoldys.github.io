/* const menuList = document.getElementById("menu-list"); */
import { menuList, menuBtn } from "./enivronment-variables.js";

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

menuList.onmouseleave = function () {
    menuBtn.classList.remove("showContent");
        menuList.style.display = "none";
        menuList.style.backgroundColor = "#302f2f";
};