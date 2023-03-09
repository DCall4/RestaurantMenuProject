import "./style.css";
import cactusImage from "./Images/cactus.png";
import bullSkullImage from "./Images/bull-skull.png";
import cowBoyimage from "./Images/western.png";

const content = document.querySelector("#content");

const headerDiv = function(){

    //Create Header Div
    const header = document.createElement('div');
    header.classList.add('header');

    content.appendChild(header);

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('homeDiv');

    header.appendChild(homeDiv);

    const homeLogo = document.createElement('img');
    homeLogo.src=cowBoyimage;
    homeLogo.classList.add('cowBoyImage');

    homeDiv.appendChild(homeLogo);

    const homeText = document.createElement('div');
    homeText.classList.add('tabText');
    homeText.textContent = 'Home';

    homeDiv.appendChild(homeText);

    //Create the container for the Menu

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuDiv');

    header.appendChild(menuDiv);

    const menuLogo = document.createElement('img');
    menuLogo.src=bullSkullImage;
    menuLogo.classList.add('bullSkullImage');

    menuDiv.appendChild(menuLogo);

    const menuText = document.createElement('div');
    menuText.classList.add('tabText');
    menuText.textContent = "Menu"

    menuDiv.appendChild(menuText);


    //Create the container for the About 
    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logoDiv');

    header.appendChild(logoDiv);

    const headerLogo = document.createElement('img');
    headerLogo.src=cactusImage;
    headerLogo.classList.add('cactusImage');

    logoDiv.appendChild(headerLogo);

    const aboutText = document.createElement('div');
    aboutText.classList.add('tabText');
    aboutText.textContent = "About";

    logoDiv.appendChild(aboutText);

     //Create Footer Div
    const footer = document.createElement('div');
    footer.classList.add('footer');
 
    content.appendChild(footer);

    footer.textContent = "Copyright David Callahan, all icons generously supplied by flaticon.com" 
    + " and background image by pexel.com"

    return header;
};

export default headerDiv;