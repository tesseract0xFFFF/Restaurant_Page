import p1 from './page1';
import p2 from './page2';
import p3 from './page3';
import '../styles.css';

const buttArea = document.createElement('div');
buttArea.classList.add('buttArea');
document.body.appendChild(buttArea);
const homeButt = document.createElement('button');
const menuButt = document.createElement('button');
const aboutButt = document.createElement('button');

homeButt.textContent = 'Home';
menuButt.textContent = 'Menu';
aboutButt.textContent = 'About';

homeButt.addEventListener('click', p1);
menuButt.addEventListener('click', p2);
aboutButt.addEventListener('click', p3);


buttArea.appendChild(homeButt);
buttArea.appendChild(menuButt);
buttArea.appendChild(aboutButt);
