const link = document.querySelector("body > div > main > footer > p > span")
const hamburger_icon = document.querySelector("body > div > header > div > div.hamburger-menu-container > div")
const header_content = document.querySelector("body > div > header > div")
const close_icon = document.querySelector('.close-icon')

link.onclick = () => {
    window.open("https://www.github.com/agn3y", "_blank");
};

hamburger_icon.onclick = ()=>{
    header_content.classList.add('menu-open')
}

close_icon.onclick = ()=>{
    header_content.classList.remove('menu-open')
}