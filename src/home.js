import chief from './img/chief.jpg'

export default function(){
  const divContainer = document.createElement('div');
  divContainer.classList.add('home-page', 'hover');
  const title = document.createElement('h3');
  title.textContent = 'We making the best pizza in the universe';
  const description = document.createElement('h3');
  description.textContent = 'Made with passion since 2022';
  const chiefImg = new Image();
  chiefImg.src = chief;
  chiefImg.classList.add('chief');
  const chiefWelcome = document.createElement('h3');
  chiefWelcome.textContent = 'our chief';
  const chiefName = document.createElement('h2');
  chiefName.textContent = 'Konstantin ivlev';
  const welcomeMsg = document.createElement('p');
  welcomeMsg.textContent = 'order online or visit us!'


  divContainer.append(title, description, chiefImg, chiefWelcome, chiefName, welcomeMsg)
  return divContainer;
}