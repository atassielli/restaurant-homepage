import phone from './phone.png';
import email from './email.png';
import twitter from './bird.png';
import address from './map-marker.png';

export default function contact () {
    let content = document.querySelector('.content');
    
    let contentHeader = document.createElement('div');
    contentHeader.textContent = 'Contact Us'
    contentHeader.classList.add('contentHeader')
    content.appendChild(contentHeader);

    let contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    content.appendChild(contactContainer);

    let phoneContact = document.createElement('div');
    phoneContact.classList.add('contact')
    let phoneSymbol = document.createElement('img');
    let phoneNumber = document.createElement('div');

    phoneSymbol.src = phone;
    phoneNumber.textContent = "Phone Number: (123) 456-7890";
    phoneContact.appendChild(phoneSymbol);
    phoneContact.appendChild(phoneNumber);
    contactContainer.appendChild(phoneContact);


    let emailContact = document.createElement('div');
    emailContact.classList.add('contact');
    let emailSymbol = document.createElement('img');
    let emailAddress = document.createElement('div');

    emailSymbol.src = email;
    emailAddress.textContent = 'Email Address: headchef@tassiellis.com';
    emailContact.appendChild(emailSymbol);
    emailContact.appendChild(emailAddress);
    contactContainer.appendChild(emailContact); 

    let twitterContact = document.createElement('div');
    twitterContact.classList.add('contact');
    let twitterSymbol = document.createElement('img');
    let twitterProfile = document.createElement('div');

    twitterSymbol.src = twitter;
    twitterProfile.textContent = "Social Media: @italianfamilyrestaurant";
    twitterContact.appendChild(twitterSymbol);
    twitterContact.appendChild(twitterProfile);
    contactContainer.appendChild(twitterContact);

    let physicalContact = document.createElement('div');
    physicalContact.classList.add('contact');
    let physicalSymbol = document.createElement('img');
    let physicalAddress = document.createElement('div');

    physicalSymbol.src = address;
    physicalAddress.textContent = "Address: 111 Tasty St. Venice, Italy";
    physicalContact.appendChild(physicalSymbol);
    physicalContact.appendChild(physicalAddress);
    contactContainer.appendChild(physicalContact);

}