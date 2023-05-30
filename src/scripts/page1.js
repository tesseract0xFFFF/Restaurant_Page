export default function page1Display(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    const Home = document.createElement('div');
    Home.textContent = 'home page';
    content.appendChild(Home);
}