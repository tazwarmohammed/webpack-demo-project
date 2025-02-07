import { clearContentsOfPage } from "./index.js";

export function contactPage() {
  // const content = document.getElementById('content');
  clearContentsOfPage();

  const title = document.createElement('h1');
  title.textContent = 'Contact Us';

  const address = document.createElement('p');
  address.textContent = '123 Main Street, City, State, 12345';

  const phone = document.createElement('p');
  phone.textContent = 'Phone: 123-456-7890';

  const email = document.createElement('p');
  email.textContent = 'Email';

  content.append(title, address, phone, email);
}