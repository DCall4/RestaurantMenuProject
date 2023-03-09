import tomatoImage from "./Images/tomato.png"
import friedImage from "./Images/fried-chicken.png"
import roastImage from "./Images/chicken-leg.png"
import cactusImage from "./Images/cactus2.png"
import varmintImage from "./Images/vermin.png"
import soupImage from "./Images/soup.png"

const menu = function(){

    const mainContent = document.querySelector(".mainContent");

   while (mainContent.firstChild) {
       mainContent.removeChild(mainContent.firstChild);
    }
    //Menu Item Card container
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menuItemDiv');
    mainContent.appendChild(menuItemDiv);

    //Menu Item 1
    const menuCard1 = document.createElement('div');
    menuCard1.classList.add('menuCard');
    menuItemDiv.appendChild(menuCard1);

    const tomato = document.createElement('img');
    tomato.src=tomatoImage;
    tomato.classList.add('menuImage');

    menuCard1.appendChild(tomato);

    const tomatoText = document.createElement('div');
    tomatoText.classList.add('menuText');
    tomatoText.textContent = 'Sun-Dried Tomato';

    menuCard1.appendChild(tomatoText);

    //Menu Item 2
    const menuCard2 = document.createElement('div');
    menuCard2.classList.add('menuCard');
    menuItemDiv.appendChild(menuCard2);

    const lizard = document.createElement('img');
    lizard.src=friedImage;
    lizard.classList.add('menuImage');

    menuCard2.appendChild(lizard);

    const lizardText = document.createElement('div');
    lizardText.classList.add('menuText');
    lizardText.textContent = 'Chicken-Fried Lizard';

    menuCard2.appendChild(lizardText);

    //Menu Item 3
    const menuCard3 = document.createElement('div');
    menuCard3.classList.add('menuCard');
    menuItemDiv.appendChild(menuCard3);

    const buzzard = document.createElement('img');
    buzzard.src=roastImage;
    buzzard.classList.add('menuImage');

    menuCard3.appendChild(buzzard);

    const buzzardText = document.createElement('div');
    buzzardText.classList.add('menuText');
    buzzardText.textContent = 'Rotisserie Roasted Buzzard';

    menuCard3.appendChild(buzzardText);

    //Menu Item 4
    const menuCard4 = document.createElement('div');
    menuCard4.classList.add('menuCard');
    menuItemDiv.appendChild(menuCard4);

    const cactus = document.createElement('img');
    cactus.src=cactusImage;
    cactus.classList.add('menuImage');

    menuCard4.appendChild(cactus);

    const cactusText = document.createElement('div');
    cactusText.classList.add('menuText');
    cactusText.textContent = 'Fresh Squeezed Cactus (Mind the Needles)';

    menuCard4.appendChild(cactusText);

    //Menu Item 5
    const menuCard5 = document.createElement('div');
    menuCard5.classList.add('menuCard');
    menuItemDiv.appendChild(menuCard5);

    const varmint = document.createElement('img');
    varmint.src=varmintImage;
    varmint.classList.add('menuImage');

    menuCard5.appendChild(varmint);

    const varmintText = document.createElement('div');
    varmintText.classList.add('menuText');
    varmintText.textContent = 'Varmint Cutlets';

    menuCard5.appendChild(varmintText);

    //Menu Item 6
    const menuCard6 = document.createElement('div');
    menuCard6.classList.add('menuCard');
    menuItemDiv.appendChild(menuCard6);

    const soup = document.createElement('img');
    soup.src=soupImage;
    soup.classList.add('menuImage');

    menuCard6.appendChild(soup);

    const soupText = document.createElement('div');
    soupText.classList.add('menuText');
    soupText.textContent = 'Hot and Spicy Rock Salt Soup';

    menuCard6.appendChild(soupText);

}

export default menu;