
const home = function(){

    const mainContent = document.querySelector(".mainContent");

   while (mainContent.firstChild) {
       mainContent.removeChild(mainContent.firstChild);
    }

    const title = document.createElement('div');
    title.classList.add('title');
    mainContent.appendChild(title);

    const titleText = document.createElement('div');
    titleText.classList.add('titleText');
    title.appendChild(titleText);

    titleText.textContent = "Welcome to Dusty Dave's "

    const titleText2 = document.createElement('div');
    titleText2.classList.add('titleText');
    title.appendChild(titleText2);

    titleText2.textContent = "Dad-gum Diner"
}

export default home;