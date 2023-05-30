export default function page2Display(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    const Menu = document.createElement('div');
    Menu.textContent = 'Menu page';
    content.appendChild(Menu);
}