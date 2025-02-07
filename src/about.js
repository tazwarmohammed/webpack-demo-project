import { clearContentsOfPage } from "./index.js";

export function aboutPage() {
  // const content = document.getElementById('content');
  clearContentsOfPage();

  const title = document.createElement('h1');
  title.textContent = 'About Us';

  const p1 = document.createElement('p');
  p1.textContent = 'Savory Spoon is a family-owned restaurant located in the heart of the city.';

  const p2 = document.createElement('p');
  p2.textContent = 'Our mission is to provide an unforgettable dining experience for all our guests.';

  const p3 = document.createElement('p');
  p3.textContent = 'We take pride in sourcing the freshest ingredients from local farms and purveyors.';

  content.append(title, p1, p2, p3);
}