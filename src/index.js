const { log } = console;

import "./style.css";
import homepageCreator from "./home";
import contactsCreator from "./contacts";
import menuCreator from "./menu";



const mainContainer = document.querySelector(".background");
const menu = document.querySelectorAll(".menu-item");

const onload = (function(){
  mainContainer.append(homepageCreator());
  activeBtn(menu[0]);
})()

menu.forEach((menu) => {
  menu.addEventListener("click", showBlock, { capture: true });
});

function activeBtn(target) {
  menu.forEach((menu) => menu.classList.remove("active"));
  target.classList.add("active");
}

function showBlock(e) {
  if (e.target.classList.contains("menu-one")) {
    mainContainer.innerHTML = "";
    activeBtn(e.target);
    mainContainer.append(homepageCreator());
  } else if (e.target.classList.contains("menu-two")) {
    mainContainer.innerHTML = "";
    activeBtn(e.target);
    mainContainer.append(menuCreator());
  } else if (e.target.classList.contains("menu-three")) {
    mainContainer.innerHTML = "";
    activeBtn(e.target);
    mainContainer.append(contactsCreator());
  }
}
