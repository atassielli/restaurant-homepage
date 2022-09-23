import './style.css';
import pageLoader from './pageLoader.js';
import home from './homepage.js';

pageLoader();

let homeButton = document.querySelector('.homeButton');
homeButton.addEventListener('click', () => {
    home();
})

let contactButton = document.querySelector('.contactButton');
contactButton.addEventListener('click', () => {
    console.log('working');
})