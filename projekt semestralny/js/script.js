przyciskMenu = document.getElementById('menu-button')
menuContainer = document.querySelector('#menu-container')

function menuOpen() {
    if(menuContainer.style.display == 'flex'){
        console.log('t')
        menuContainer.style.display = 'none'
    }
    else {
        menuContainer.style.display = 'flex'
    }
}

przyciskMenu.addEventListener("click", () => {
    menuOpen()
});