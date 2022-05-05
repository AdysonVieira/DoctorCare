function onScroll() {
    if(scrollY == 0) {
        navigation.classList.remove('scroll')
        navButton.classList.remove('btn-secundary-white')
    }
    
    else {
        navigation.classList.add('scroll')
        navButton.classList.add('btn-secundary-white')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}