function onScroll() {
    if(scrollY == 0) {
        navigation.classList.remove('scroll')
    }
    
    else {
        navigation.classList.add('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

scrollReveal({
    origin:'top',
    distance: '30px',
    duration: 900,
}).reveal('.home-content, .home-content button, .home-img');