import odinImage from "./restaurant.jpg";
import { clearContentsOfPage } from "./index.js";

export function homePage() {
  clearContentsOfPage();

  const title = document.createElement('h1');
  title.textContent = "Welcome to Tamanna's Restaurant";

  const image = document.createElement('img');
  image.src = odinImage;
  image.alt = 'Restaurant Interior';
  image.style.width = '20%'; // Set the width to 50% of the container

  const subtitle = document.createElement('h2');
  subtitle.textContent = 'Discover Culinary Magic';

  const p1 = document.createElement('p');
  p1.textContent = 'At Savory Spoon, we believe every meal is an experience. Our passionate chefs craft exquisite dishes using locally sourced ingredients, blending traditional techniques with innovative flavors.';

  const p2 = document.createElement('p');
  p2.textContent = 'Whether you\'re seeking an intimate dinner, a celebratory feast, or a casual lunch with friends, our restaurant offers something special for every palate. Come taste the difference at Savory Spoon!';

  content.append(title, image, subtitle, p1, p2);
}