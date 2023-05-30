export default function page3Display(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    const About = document.createElement('div');
    About.textContent = 'About page';
    content.appendChild(About);
}