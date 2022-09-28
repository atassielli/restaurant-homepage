import './style.css';
import pageLoader from './pageLoader.js';
import clearPage from './clearPage.js';
import home from './homepage.js';
import menu from './menu.js';
import contact from './contact.js';

pageLoader();

home();

let currentPage = "home"

let homeButton = document.querySelector('.homeButton');
homeButton.addEventListener('click', () => {
    if (currentPage === "home") {
        return 
    } else {
        clearPage();
        currentPage = "home";
        home();
    }
})

let contactButton = document.querySelector('.contactButton');
contactButton.addEventListener('click', () => {
    if (currentPage === 'contact') {
        return
    } else {
        clearPage();
        currentPage = 'contact';
        contact();
    }
})

let menuButton = document.querySelector('.menuButton');
menuButton.addEventListener('click', () => {
    if (currentPage === 'menu') {
        return
    } else {
        clearPage();
        currentPage = 'menu';
        menu();
    }
})