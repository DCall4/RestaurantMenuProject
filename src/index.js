import "./style.css";
import headerDiv from "./header";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

headerDiv();

const content = document.querySelector("#content");

const mainContent = document.createElement('div');
mainContent.classList.add('mainContent');

content.appendChild(mainContent);

home();

const homeButton = document.querySelector(".homeDiv");
const menuButton = document.querySelector(".menuDiv");
const aboutButton = document.querySelector(".logoDiv");

homeButton.addEventListener('click', function(){
    console.log("home");
    home();
});

menuButton.addEventListener('click', function(){
    console.log("menu");
    menu();
});

aboutButton.addEventListener('click', function(){
    console.log("about");
    about();
});