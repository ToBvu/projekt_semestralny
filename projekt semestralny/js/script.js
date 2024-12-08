przyciskMenu = document.getElementById('przycisk')
menuContainer = document.querySelector('#menu-container')

function menuOpen() {
    if(menuContainer.style.display == 'flex'){
        console.log('menu zamknięte!')
        menuContainer.style.display = 'none'
    }
    else {
        console.log('menu otwarte!')
        menuContainer.style.display = 'flex'
    }
}


przyciskMenu.addEventListener("click", () => {
    menuOpen()
});