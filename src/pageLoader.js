let webpage = document.querySelector('.webpage');
import gitIcon from '/Users/anthonytassielli/repos/intermediate-javascript/restaurant-homepage/src/gitIcon.png';


export default function pageLoader () {
    let header = document.createElement('div');
    header.classList.add('header');
    header.textContent = "Tassielli's";
    webpage.appendChild(header);

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    header.appendChild(buttons);

    let homeButton = document.createElement('button');
    homeButton.classList.add('headerButton');
    homeButton.classList.add('homeButton');
    homeButton.textContent = 'Home';
    buttons.appendChild(homeButton);

    let menuButton = document.createElement('button');
    menuButton.classList.add('headerButton');
    menuButton.classList.add('menuButton');
    menuButton.textContent = 'Menu';
    buttons.appendChild(menuButton);

    let contactButton = document.createElement('button');
    contactButton.classList.add('headerButton');
    contactButton.classList.add('contactButton');
    contactButton.textContent = 'Contact';
    buttons.appendChild(contactButton);

    let content = document.createElement('div');
    content.classList.add('content');
    webpage.appendChild(content);

    let footer = document.createElement('div');
    footer.classList.add('footer');
    webpage.appendChild(footer);

    let footerText = document.createElement('div');
    footerText.classList.add('footerText');
    footerText.textContent = 'Created by Anthony Tassielli 2022';
    footer.appendChild(footerText);

    let footerIcon = document.createElement('img');
    footerIcon.classList.add('footerIcon');
    footerIcon.src = gitIcon;
    footer.appendChild(footerIcon)


}
