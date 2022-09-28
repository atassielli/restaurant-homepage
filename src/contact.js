export default function contact () {
    let content = document.querySelector('.content');
    
    let contentHeader = document.createElement('div');
    contentHeader.textContent = 'Contact Us'
    contentHeader.classList.add('contentHeader')
    content.appendChild(contentHeader);

    let contentBody = document.createElement('div');
    contentBody.classList.add('contentBody');
    contentBody.innerHTML = "Hello"
    content.appendChild(contentBody);
}