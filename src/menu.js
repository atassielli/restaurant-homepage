import pepperoni from './pepperoni-pizza.jpeg';
import cheese from './cheese-pizza.jpeg';
import supreme from './supreme-pizza.jpeg';
import lasagnaImg from './lasagna.jpeg';
import ravioliImg from './ravioli.jpeg';
import spaghettiImg from './spaghetti.jpeg';

export default function menu () {
    let content = document.querySelector('.content');

    let contentHeader = document.createElement('div');
    contentHeader.textContent = 'Menu'
    contentHeader.classList.add('contentHeader')
    content.appendChild(contentHeader);

    let contentBody = document.createElement('div');
    contentBody.classList.add('contentBody');
    content.appendChild(contentBody);

    let pizzaHeader = document.createElement('div');
    pizzaHeader.classList.add('menuTitle');
    pizzaHeader.textContent = 'Pizza';
    contentBody.appendChild(pizzaHeader);

    let pizzaGrid = document.createElement('div');
    pizzaGrid.classList.add('menuGrid');
    contentBody.appendChild(pizzaGrid);

    function MenuItem (name, image, description) {
        let itemName = name 
        let itemImage = image
        let itemDescription = description
        return {itemName, itemImage, itemDescription}
    }

    let pepperoniPizza = document.createElement('div');
    let pepperoniPizzaItem = new MenuItem ('Pepperoni', pepperoni, 'Delicious spicy pepperoni generously covering the entire pizza');
    pepperoniPizza.classList.add('menuItem');
    pepperoniPizza.innerHTML = `
    <img class='menuImg' src=${pepperoni} alt=${pepperoniPizzaItem.itemName}>
    <p class='menu-name'>${pepperoniPizzaItem.itemName}</p> 
    <p class='menu-description'>${pepperoniPizzaItem.itemDescription}</p>
    `;
    pizzaGrid.appendChild(pepperoniPizza);

    let cheesePizza = document.createElement('div');
    let cheesePizzaItem = new MenuItem ('Cheese', cheese, 'Delicious italian cheese generously covering the entire pizza');
    cheesePizza.classList.add('menuItem');
    cheesePizza.innerHTML = `
    <img class='menuImg' src=${cheese} alt=${cheesePizzaItem.itemName}>
    <p class='menu-name'>${cheesePizzaItem.itemName}</p> 
    <p class='menu-description'>${cheesePizzaItem.itemDescription}</p>
    `;
    pizzaGrid.appendChild(cheesePizza);

    let supremePizza = document.createElement('div');
    let supremePizzaItem = new MenuItem ('Supreme', supreme, 'Delicious supreme pizza with a meat and veggie combo');
    supremePizza.classList.add('menuItem');
    supremePizza.innerHTML = `
    <img class='menuImg' src=${supreme} alt=${supremePizzaItem.itemName}>
    <p class='menu-name'>${supremePizzaItem.itemName}</p> 
    <p class='menu-description'>${supremePizzaItem.itemDescription}</p>
    `;
    pizzaGrid.appendChild(supremePizza);

    let pastaHeader = document.createElement('div');
    pastaHeader.classList.add('menuTitle');
    pastaHeader.textContent = 'Pasta';
    contentBody.appendChild(pastaHeader);

    let pastaGrid = document.createElement('div');
    pastaGrid.classList.add('menuGrid');
    contentBody.appendChild(pastaGrid);

    let lasagna = document.createElement('div');
    let lasagnaItem = new MenuItem ('Lasagna', lasagnaImg, 'Delicious five layer italian lasagna with fresh ricotta');
    lasagna.classList.add('menuItem');
    lasagna.innerHTML = `
    <img class='menuImg' src=${lasagnaImg} alt=${lasagnaItem.itemName}>
    <p class='menu-name'>${lasagnaItem.itemName}</p> 
    <p class='menu-description'>${lasagnaItem.itemDescription}</p>
    `;
    pastaGrid.appendChild(lasagna);

    let ravioli = document.createElement('div');
    let ravioliItem = new MenuItem ('Ravioli', ravioliImg, 'Delicious ravioli stuffed with spicy italian sausage');
    ravioli.classList.add('menuItem');
    ravioli.innerHTML = `
    <img class='menuImg' src=${ravioliImg} alt=${ravioliItem.itemName}>
    <p class='menu-name'>${ravioliItem.itemName}</p> 
    <p class='menu-description'>${ravioliItem.itemDescription}</p>
    `;
    pastaGrid.appendChild(ravioli);

    let spaghetti = document.createElement('div');
    let spaghettiItem = new MenuItem ('Spaghetti', spaghettiImg, 'Delicious spaghetti with fresh beef and pork meatballs');
    spaghetti.classList.add('menuItem');
    spaghetti.innerHTML = `
    <img class='menuImg' src=${spaghettiImg} alt=${spaghettiItem.itemName}>
    <p class='menu-name'>${spaghettiItem.itemName}</p> 
    <p class='menu-description'>${spaghettiItem.itemDescription}</p>
    `;
    pastaGrid.appendChild(spaghetti);
}