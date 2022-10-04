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
let menuButton = document.querySelector('.menuButton');
let contactButton = document.querySelector('.contactButton');
changeButton();

homeButton.addEventListener('click', () => {
    if (currentPage === "home") {
        return 
    } else {
        clearPage();
        currentPage = "home";
        changeButton();
        home();
    }
})

contactButton.addEventListener('click', () => {
    if (currentPage === 'contact') {
        return
    } else {
        clearPage();
        currentPage = 'contact';
        changeButton();
        contact();
    }
})

menuButton.addEventListener('click', () => {
    if (currentPage === 'menu') {
        return
    } else {
        clearPage();
        currentPage = 'menu';
        changeButton();
        menu();
    }
})

function changeButton() {
    if (currentPage === 'home') {
        homeButton.style.cssText = "background-color: white; color: black";
        menuButton.style.cssText = "background-color: black; color: white";
        contactButton.style.cssText = "background-color: black; color: white";
        return;
    } else if (currentPage === 'menu') {
        homeButton.style.cssText = "background-color: black; color: white";
        menuButton.style.cssText = "background-color: white; color: black";
        contactButton.style.cssText = "background-color: black; color: white";
        return;
    } else if (currentPage === 'contact') {
        homeButton.style.cssText = "background-color: black; color: white";
        menuButton.style.cssText = "background-color: black; color: white";
        contactButton.style.cssText = "background-color: white; color: black";
        return;
    }
}