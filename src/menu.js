import { clearContentsOfPage } from "./index.js";

export function menuPage() {
  // const content = document.getElementById('content');
  clearContentsOfPage();

  const title = document.createElement('h1');
  title.textContent = 'Our Menu';

  const appetizers = document.createElement('h2');
  appetizers.textContent = 'Appetizers';

  const appetizerList = document.createElement('ul');
  const appetizerItems = ['Bruschetta', 'Calamari', 'Caprese Salad', 'Garlic Bread', 'Stuffed Mushrooms'];
  appetizerItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    appetizerList.appendChild(li);
  });

  const entrees = document.createElement('h2');
  entrees.textContent = 'Entrees';

  const entreeList = document.createElement('ul');
  const entreeItems = ['Chicken Parmesan', 'Eggplant Rollatini', 'Lasagna', 'Spaghetti Carbonara', 'Veal Marsala'];
  entreeItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    entreeList.appendChild(li);
  });

  const desserts = document.createElement('h2');
  desserts.textContent = 'Desserts';

  const dessertList = document.createElement('ul');
  const dessertItems = ['Cannoli', 'Chocolate Cake', 'Gelato', 'Tiramisu', 'Zeppole'];
  dessertItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    dessertList.appendChild(li);
  });

  content.append(title, appetizers, appetizerList, entrees, entreeList, desserts, dessertList);
}