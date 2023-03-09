const about = function(){

    const mainContent = document.querySelector(".mainContent");

   while (mainContent.firstChild) {
       mainContent.removeChild(mainContent.firstChild);
    }

    const about = document.createElement('div');
    about.classList.add('about');
    mainContent.appendChild(about);

    const aboutText = document.createElement('div');
    aboutText.classList.add('aboutText');
    about.appendChild(aboutText);

    aboutText.textContent = "The Driest and Most Dehydratedest Establishment this side of the Mogollan Rim"
}

export default about;