import map from './img/restaurant-location.png';

export default function(){
  const contactsPage = document.createElement('div');
  contactsPage.classList.add('contacts-page', 'hover');
  const title = document.createElement('h3');
  title.textContent = 'our contacts';
  const phoneNumber = document.createElement('p')
  phoneNumber.textContent = '📞 123 456 789';
  const address = document.createElement('p')
  address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';
  const mapPicture = new Image();
  mapPicture.src = map;
  mapPicture.classList.add('map-location')

  contactsPage.append(title, phoneNumber, address, mapPicture);
  return contactsPage;
}