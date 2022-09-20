let webpage = document.querySelector('.webpage')

export default function home () {
    let header = document.createElement('div');
    header.classList.add('header');
    header.textContent = "Tassielli's";
    webpage.appendChild(header);

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    header.appendChild(buttons);

    let homeButton = document.createElement('button');
    homeButton.classList.add('headerButton');
    homeButton.textContent = 'Home';
    buttons.appendChild(homeButton);

    let menuButton = document.createElement('button');
    menuButton.classList.add('headerButton');
    menuButton.textContent = 'Menu';
    buttons.appendChild(menuButton);

    let contactButton = document.createElement('button');
    contactButton.classList.add('headerButton');
    contactButton.textContent = 'Contact';
    buttons.appendChild(contactButton);

    let content = document.createElement('div');
    content.classList.add('content');
    webpage.appendChild(content);

    let contentBody = document.createElement('div');
    contentBody.classList.add('contentBody');
    content.appendChild(contentBody);

    let footer = document.createElement('div');
    footer.classList.add('footer');
    webpage.appendChild(footer);

}
