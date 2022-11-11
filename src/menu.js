class Food {
  constructor(src, name, price, content){
    this.src = src;
    this.name = name;
    this.price = price;
    this.content = content;
  }
  createFood(){
    const food = document.createElement('div');
    food.classList.add('food');
    const img = document.createElement('img');
    img.setAttribute('src', this.src);
    img.setAttribute('alt', this.name);

    const description = document.createElement('div');
    description.classList.add('description')
    const foodName = document.createElement('div');
    foodName.classList.add('food-name');
    foodName.textContent = this.name;
    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = this.price + '€';

    description.append(foodName, price)

    const foodContent = document.createElement('div');
    foodContent.classList.add('food-content');
    foodContent.textContent = this.content;

    food.append(img, description, foodContent);

    return food;
  }
}

const food = [
  new Food(
    "./img/Salsiccia.jpeg",
    "Salsiccia",
    10,
    "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
  ),
  new Food(
    "./img/Gamberi.jpg",
    "Gamberi",
    12,
    "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
  ),
  new Food(
    "./img/Carne.jpg",
    "Carne",
    18,
    "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
  ),
  new Food(
    "./img/Colorato.jpg",
    "Colorato",
    15,
    "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
  ),
  new Food(
    "./img/Pomodoro.jpg",
    "Pomodoro",
    14,
    "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
  ),
  new Food(
    "./img/Crema.jpg",
    "Crema",
    16,
    "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
  ),
];

export default function(){
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-page', 'hover');
  food.forEach(food => menuContainer.append(food.createFood()))
  return menuContainer;
}

