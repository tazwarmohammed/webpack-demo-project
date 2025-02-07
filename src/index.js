// filepath: /C:/Users/Tazwar/Desktop/TOP projects and playground/webpack/webpack-project-TOP/src/index.js
console.log("This is Tamanna's Restaurant");

import './style.css';

import { homePage } from './home.js';
import { contactPage } from './contact.js';
import { aboutPage } from './about.js';
import { menuPage } from './menu.js';

const content = document.getElementById('content');
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

function setActiveButton(button) {
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

home.addEventListener('click', () => {
  setActiveButton(home);
  homePage();
});

menu.addEventListener('click', () => {
  setActiveButton(menu);
  menuPage();
});

about.addEventListener('click', () => {
  setActiveButton(about);
  aboutPage();
});

contact.addEventListener('click', () => {
  setActiveButton(contact);
  contactPage();
});

export function clearContentsOfPage() {
  content.innerHTML = '';
}

// Set the initial active button and load the home page
setActiveButton(home);
homePage();